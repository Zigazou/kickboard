var currentUserList = [];
function updateUserList() {
    const users = [];

    document.querySelectorAll(".chat-line__message [data-a-user]").forEach(
        elt => {
            if (!users.includes(elt.dataset.aUser)) {
                users.push(elt.dataset.aUser);
            }
        }
    );

    currentUserList = users.sort();
}

function removeOptions(select) {
    const length = select.options.length - 1;
    for(let index = length; index >= 0; index--) select.remove(index);
}

function fillWithUserList(select, list) {
    removeOptions(select);

    const option = document.createElement('option');
    option.innerText = "quelqu'un au hasard";
    option.value = "@";
    select.appendChild(option);

    list.forEach(value => {
        const option = document.createElement('option');
        option.innerText = value;
        option.value = value;
        select.appendChild(option);
    });
}

const userStat = {
    lastVisitedMessage: null,
    users: {},
};

function analyzeMessage(node) {
    const textNode = node.querySelector("span.text-fragment");
    const userNode = node.querySelector("[data-a-user]");

    if (textNode === null || userNode === null) return;

    const text = textNode.innerText;
    const user = userNode.dataset.aUser;

    // First time we see this user?
    if (userStat.users[user] === undefined) {
        userStat.users[user] = {
            hug: 0,
            attack: 0,
            dance: 0,
            jump: 0,
            talk: 0,
        };
    }

    if (text.startsWith('!hug'))  {
        userStat.users[user].hug += 1;
    } else if (text.startsWith('!attack') || text.startsWith('!bomb'))  {
        userStat.users[user].attack += 1;
    } else if (text.startsWith('!dance'))  {
        userStat.users[user].dance += 1;
    } else if (text.startsWith('!jump'))  {
        userStat.users[user].jump += 1;
    } else {
        userStat.users[user].talk += 1;
    }
}

function findTop(key) {
    let topUser = '*personne*';
    let max = 0;
    for (let user in userStat.users) {
        if (userStat.users[user][key] > max) {
            max = userStat.users[user][key];
            topUser = user;
        }
    }

    return topUser;
}

function updateUserStat() {
    // Is there a last visited message?
    if (userStat.lastVisitedMessage === null ||
        userStat.lastVisitedMessage.parentElement === null) {
        userStat.lastVisitedMessage = document.querySelector(
            ".chat-line__message"
        );

        // Stil no available message?
        if (userStat.lastVisitedMessage === null) return;
        analyzeMessage(userStat.lastVisitedMessage);
    }

    // Is there new messages?
    while (userStat.lastVisitedMessage.nextSibling !== null) {
        userStat.lastVisitedMessage = userStat.lastVisitedMessage.nextSibling;
        analyzeMessage(userStat.lastVisitedMessage);
    }

    // Compute ranking
    let ranking = "";
    ranking = "Câlinerie&nbsp;: <span class='chat-author__display-name'>" + findTop('hug') + '</span>';
    ranking += " | agressivité&nbsp;: <span class='chat-author__display-name'>" + findTop('attack') + '</span>';
    ranking += " | blabla&nbsp;: <span class='chat-author__display-name'>" + findTop('talk') + '</span>';
    ranking += " | saut&nbsp;: <span class='chat-author__display-name'>" + findTop('jump') + '</span>';
    ranking += " | danse&nbsp;: <span class='chat-author__display-name'>" + findTop('dance') + '</span>';

    kickboardRanking.innerHTML = ranking;
}

function execPattern(pattern) {
    if ('bit' in pattern) {
        pattern = kickboardConfig.bits[pattern.bit];
    }

    if ('rnd' in pattern) {
        let count = pattern.rng[0] +
            Math.round(
                Math.random() * (pattern.rng[1] - pattern.rng[0])
            );
        let string = "";
        for (let i = 0; i < count; i++) {
            if (typeof pattern.rnd === "string") {
                string += pattern.rnd;
            } else {
                string += pattern.rnd[
                    Math.floor(Math.random() * pattern.rnd.length)
                ];
            }
        }
        return string;
    } else if ('str' in pattern) {
        return pattern.str;
    } else {
        return '';
    }
}

if (document.querySelector('nav.top-nav') === null) {
    alert('Cette page ne semble pas être une page de Twitch !');
    throw new Error("Not a Twitch page");
}

if (document.querySelector('div.chat-input') === null) {
    alert('Le chat n’a pas été trouvé sur cette page !');
    throw new Error("Chat not found");
}

const twitchContainer = document.querySelector('nav.top-nav').parentElement;
const chatInput = document.querySelector('div.chat-input');
const chatTextarea = chatInput.querySelector(
    'textarea[data-a-target="chat-input"]'
);
const chatSend = chatInput.querySelector(
    'button[data-a-target="chat-send-button"]'
);

// Needs this otherwise React won't acknowledge our changes to a textarea.
const textareaSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    "value"
).set;

// Kickboard container.
const kickboardContainer = document.createElement('div');
kickboardContainer.id = "kickboard";
kickboardContainer.className = "tw-flex tw-flex-column tw-flex-nowrap";
const kickboardRanking = document.createElement('div');
kickboardRanking.id = "kickboard-ranking";
kickboardContainer.appendChild(kickboardRanking);
setInterval(updateUserStat, kickboardConfig.refresh.userStat);

// Create groups and sections.
const fields = document.createElement('div');
const select = document.createElement('select');
select.className = "tw-pd-05";

select.addEventListener('change', event => {
    document
        .querySelectorAll('.kb-section')
        .forEach(element => element.classList.add('tw-hide'));

    document
        .querySelector('.kb-section-' + select.value)
        .classList
        .remove('tw-hide');
});

updateUserList();
setInterval(updateUserList, kickboardConfig.refresh.userList);
const sectionsArea = document.createElement('div');
const firstOption = document.createElement('option');
firstOption.innerText = "-- Selectionnez la chanson... --";
firstOption.value = "";
select.appendChild(firstOption);
let index = 0;
for (let groupName in kickboardConfig.groups) {
    let group = document.createElement('optgroup');
    group.label = groupName;

    kickboardConfig.groups[groupName].forEach(section => {
        // Create the option for the select list.
        const option = document.createElement('option');
        option.innerText = section.name;
        option.value = index;
        group.appendChild(option);

        // Create the section area.
        const sectionArea = document.createElement('div');
        sectionArea.className = 'tw-hide kb-section kb-section-' + index;

        // Create section buttons.
        [ ...kickboardConfig.everywhere, '', ...section.msgs ].forEach(msg => {
            if (msg === '') {
                sectionArea.appendChild(document.createElement('hr'))
            } else if (msg.type === 'select') {
                const container = document.createElement('div');
                container.className = "tw-button tw-mg-05 tw-pd-r-05";
                const selectUser = document.createElement('select');

                fillWithUserList(selectUser, currentUserList)
                setInterval(
                    () => { fillWithUserList(selectUser, currentUserList); },
                    kickboardConfig.refresh.userList
                )

                const selectButton = document.createElement('button');
                selectButton.className = 'tw-mg-05 tw-mg-l-0 ' +
                    'tw-align-items-center ' +
                    'tw-align-middle tw-button tw-inline-flex ' +
                    'tw-justify-content-center tw-relative ' +
                    'tw-pd-l-1 tw-pd-r-1 tw-pd-y-05 ' +
                    (msg.cls ? msg.cls : '');
                selectButton.innerText = msg.name;
            
                selectButton.addEventListener("click", () => {
                    if (currentUserList.length == 0) return;

                    const selectedUser = selectUser.value === "@" ?
                        currentUserList[
                            Math.floor(Math.random() * currentUserList.length)
                        ] :
                        selectUser.value;

                    textareaSetter.call(
                        chatTextarea,
                        msg.parts.map(execPattern).join("") + " " +
                        "@" + selectedUser
                    );

                    chatTextarea.dispatchEvent(
                        new Event('input', { bubbles: true })
                    );
                    chatSend.click();
                });
        
                container.appendChild(selectButton);
                container.appendChild(selectUser);

                sectionArea.appendChild(container);
            } else {
                const sendButton = document.createElement('button');
                sendButton.className = 'tw-mg-05 tw-align-items-center ' +
                    'tw-align-middle tw-button tw-inline-flex ' +
                    'tw-justify-content-center tw-relative ' +
                    'tw-pd-l-1 tw-pd-r-1 tw-pd-y-05 ' +
                    (msg.cls ? msg.cls : '');
                sendButton.innerText = msg.name;
            
                sendButton.addEventListener("click", () => {
                    textareaSetter.call(
                        chatTextarea, msg.parts.map(execPattern).join("")
                    );
                    chatTextarea.dispatchEvent(
                        new Event('input', { bubbles: true })
                    );
                    chatSend.click();
                });
        
                sectionArea.appendChild(sendButton);
            }
        });

        sectionsArea.appendChild(sectionArea);
        index += 1;
    })

    select.appendChild(group);
}

kickboardContainer.appendChild(select);
kickboardContainer.appendChild(sectionsArea);

twitchContainer.appendChild(kickboardContainer);
