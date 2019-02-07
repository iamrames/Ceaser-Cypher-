var cypherText = [];
var decryptedText = [];

function Encrypt(key,string){
	return string.split("")
		.map(char => {
			let code = char.charCodeAt();
			if(code >= 65 && code <= 90)
				return String.fromCharCode(((code + key - 65)%26) + 65);
			else if(code >= 97 && code <= 122)
				return String.fromCharCode(((code + key - 97)%26)+97);
			else if(code == 32)
				return '$';
			else if(code >= 48 && code <= 57)
				return String.fromCharCode(((code + key - 48)%10)+48);
		}).join('');
}

function Decrypt(key,string){
	return string.split("")
		.map(char => {
			let code = char.charCodeAt();
			if(code >= 65 && code <= 90)
				return String.fromCharCode(((code - key + 26 -65)%26) + 65);
			else if(code >= 97 && code <= 122)
				return String.fromCharCode(((code - key + 26 - 97)%26) + 97);
			else if(code == 36)
				return ' ';
			else if(code >= 48 && code <= 57)
				return String.fromCharCode(((code - key + 10 - 48)%10)+48);
		}).join('');
}

// Your file location
let file = 'D:\OS.txt';

var fs = require('fs');
var textByLine = fs.readFileSync(file).toString().split("\n");

for(let line of textByLine)
	cypherText.push(Encrypt(3,line));

for(let line of cypherText)
	decryptedText.push(Decrypt(3,line));

console.log(cypherText);
console.log(decryptedText);

