var basic = require("./basicCard.js");
var cloze = require("./clozeCard");
var fs = require("fs");
var inquirer = require("inquirer");
var basicArray = [];
var clozeArray = [];

// This is the first question asked to the user.
// Determines if the user wants to create a basic or cloze flashcard.
function initialPrompt() {
	inquirer.prompt([{
		type: "list",
		name: "userInput",
		message: "Do you want to create a BASIC or CLONE flashcard?",
		choices: ["BASIC","CLOZE"]
	}]).then(function(answer){
		if(answer.userInput === "BASIC"){
			createBasic();
		}else {
			createCloze();
		}
	});
};

initialPrompt();

// Function executed if user answered BASIC for the above prompt.
// Takes in the question (front) and answer(back) and logs the input
function createBasic() {
	inquirer.prompt([{
		type: "input",
		name: "front",
		message: "Write out your question."
	}, {
		type: "input",
		name: "back",
		message: "Write out the answer."
	}]).then(function(answers) {
		var newCard = new basic(answers.front, answers.back);
		basicArray.push(newCard);
		console.log(basicArray);
	});
};


// Function executed if user answered CLOZE for the first prompt.
// Takes in the full question and determines which word(s) will be omitted
function createCloze() {
	inquirer.prompt([{
		type: "input",
		name: "full",
		message: "Write out the full statement."
	}, {
		type: "input",
		name: "clozed",
		message: "Which word(s) in the full statement do you want omitted?"
	}]).then(function(answers) {
		var newCard = new cloze(answers.text, answers.cloze);
		clozeArray.push(newCard);
		console.log(clozeArray);
	});
};