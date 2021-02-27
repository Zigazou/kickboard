ALL: kickboard-bookmarklet.js install-page.html

kickboard-bookmarklet.js: kickboard-config.js kickboard.js
	terser kickboard-config.js kickboard.js --toplevel --compress --mangle -o kickboard-bookmarklet.js

install-page.html: install-page.template.html kickboard-bookmarklet.js generate-install-page.js
	node generate-install-page.js > install-page.html

clean:
	rm --force kickboard-bookmarklet.js install-page.html
