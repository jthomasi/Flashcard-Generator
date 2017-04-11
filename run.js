var Basic = require('./BasicCard');
var Cloze = require('./ClozeCard');
var inquirer = require("inquirer");
var basic_cards = [];
var cloze_cards = [];
initialCards();

function initialCards() {

	var newBasic = new Basic("Who was the first president of the United States?","George Washington");
	basic_cards.push(newBasic);
	var newBasic = new Basic("Who is the creator of the first automobile?","Karl Benz");
	basic_cards.push(newBasic);

	var newCloze = new Cloze("The wheels on the bus go round and round","round and round");
	cloze_cards.push(newCloze);
	var newCloze = new Cloze("Luke, I am your father","father");
	cloze_cards.push(newCloze);

	run();

}

function createBasic() {

	inquirer.prompt([
	  {
	    name: "front",
	    message: "Enter the front text of your flashcard."
	  }, {
	    name: "back",
	    message: "Enter the back text of your flashcard."
	  }
	]).then(function(answers) {
	  
	  var newBasic = new Basic(answers.front, answers.back);

	  newBasic.printFront();
	  newBasic.printBack();

	  console.log("You created a new basic flashcard!");

	  basic_cards.push(newBasic);

	  run();

	});
}

function createCloze() {

	inquirer.prompt([
	  {
	    name: "text",
	    message: "Enter the full text for your flashcard."
	  }, {
	    name: "cloze",
	    message: "Enter the cloze for your text."
	  }
	]).then(function(answers) {
	  
	  var newCloze = new Cloze(answers.text, answers.cloze);

	  newCloze.printFull();
	  newCloze.printPartial();
	  newCloze.printCloze();

	  console.log("Created a new clozed flashcard!");

	  cloze_cards.push(newCloze);

	  run();

	});
}

function cardsBasic(){

	inquirer.prompt([
	  {
	  	type: "input",
	    name: "flashcard",
	    message: "Which card? (Enter 00 to go back to main menu)"
	  }
	]).then(function(answers) {
	  
	  if (answers.flashcard != "00"){
	  	 questions(answers.flashcard);
	  }
	  else i
	   

	});

}

function questions(i){

	inquirer.prompt([
	  {
	  	type: "input",
	    name: "flashcard",
	    message: basic_cards[i].front
	  }
	]).then(function(answers) {
	  
	    if (answers.flashcard == basic_cards[i].back) {
	    	console.log("Correct!");
	    	console.log(basic_cards[i].printFront(), basic_cards[i].printBack());
	    	run();
	    }
	    else {
	    	console.log("That is incorrect!");
	    	console.log(basic_cards[i].printFront(), basic_cards[i].printBack());
	    	run();
	    }

	});

}

function cardsCloze(){

	for (var i=0;i<cloze_cards.length;i++){
		console.log("-----------------------------------------------------------------");
		console.log("Card "+(i+1)+":");
		cloze_cards[i].printPartial();
		console.log("-----------------------------------------------------------------");
		console.log("-----------------------------------------------------------------");
		cloze_cards[i].printCloze();
	}

	run();
	
}

function run(){

	inquirer.prompt([
	  {
	    name: "command",
	    message: "Would you like to print the current cards or create new ones? (create/print basic/cloze)"
	  }
	]).then(function(answers) {
	  
	    if (answers.command == "create basic"){
			createBasic();
		}
		else if (answers.command == "create cloze"){
			createCloze();
		}
		else if (answers.command == "print basic"){
			cardsBasic();
		}
		else if (answers.command == "print cloze"){
			cardsCloze();
		}
		else {
			console.log("Please enter a proper command.");
			run();
		}

	});

}