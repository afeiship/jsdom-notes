const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const { join } = require('path');
const html = fs.readFileSync(join(__dirname, './assets/index.html'));

const dom = new JSDOM(html);

console.log(dom);

