function execPattern(pattern) {
    if ('rnd' in pattern) {
        let count = pattern.min +
            Math.round(
                Math.random() * (pattern.max - pattern.min)
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
const kickboardContainer = document.createElement('div')
kickboardContainer.className = "tw-flex tw-flex-column tw-flex-nowrap";

// Create groups and sections.
const fields = document.createElement('div');
const select = document.createElement('select');
select.className = "tw-pd-05";

select.addEventListener('change', event => {
    console.log(select)
    document
        .querySelectorAll('.kb-section')
        .forEach(element => element.classList.add('tw-hide'));

    document
        .querySelector('.kb-section-' + select.value)
        .classList
        .remove('tw-hide');
});

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
        section.msgs.forEach(msg => {
            const sendButton = document.createElement('button')
            sendButton.className = 'tw-mg-05 tw-align-items-center ' +
                'tw-align-middle tw-button tw-inline-flex ' +
                'tw-justify-content-center tw-relative ' +
                'tw-pd-l-1 tw-pd-r-1 tw-pd-y-05';
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
        });

        sectionsArea.appendChild(sectionArea);
        index += 1;
    })

    select.appendChild(group);
}

kickboardContainer.appendChild(select);
kickboardContainer.appendChild(sectionsArea);

twitchContainer.appendChild(kickboardContainer);
