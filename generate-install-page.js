const fsPromises = require('fs').promises

const assetFiles = ['kickboard-bookmarklet.js', 'install-page.template.html']

Promise.all(assetFiles.map(filename => fsPromises.readFile(filename, 'utf-8')))
    .then(assets => {
        const encoded = encodeURIComponent(assets[0])
        const link = assets[1].replace(
            "{{KICKBOARD-BOOKMARKLET}}",
            "javascript:(function(){;" + encoded + ";})()"
        )

        console.log(link)
    })
    .catch(console.error)
