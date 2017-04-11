var basic = require("./basicCard.js");
var cloze = require("./clozeCard");
var fs = require("fs");
var inquirer = require("inquirer");
var basicArray = [];

function initialPrompt() {
	inquirer.prompt([{
		type: "list",
		name: "userInput",
		message: "Do you want to create a BASIC or CLONE flashcard?",
		choices: ["BASIC","CLONE"]
	}]).then(function(answer){
		if(answer.userInput === "BASIC"){
			createBasic();
		}else {
			console.log("clone it is!");
		}
	});
};

initialPrompt();

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

function createClose() {
	
}