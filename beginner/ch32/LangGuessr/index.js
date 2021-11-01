// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const franc = require('franc')
const langs = require('langs')
const colors = require('colors')
const input = process.argv[2]
const langCode = franc(input)
if (langCode === "und") {
	console.log("Sorry, couldn't figure it out! Try with more sample text!".red)
} else {
	const language = langs.where("3", langCode)
	console.log(`Our best guess is ${language.name}`.green)
}
