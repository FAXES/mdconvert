const main = require('../index.js');

function convert(string, plain) {
    let pre = '\n---\n';
    if(string.indexOf(pre) == -1) return -1;
    if(plain) return string.replace(pre, '');
    string = string.replace(pre, `\n<hr${main.getStyle('hr', true)} />\n`);
    return string;
};

main.registerInline({exec: convert});