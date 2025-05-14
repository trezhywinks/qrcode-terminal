console.log("Hello user");
const qrcode = require('qrcode-terminal');
const host = 'https://github.com/trezhywinks/';

qrcode.generate(host, {small: true}, function(qrcode) {
console.log(qrcode);
})
