var command = process.argv[2];
var Basic = require('./BasicCard');
var Cloze = require('./ClozeCard');
var basic_cards = [];
var cloze_cards = [];

if (command == "basic"){



}

else if (command == "cloze"){

}

else {
	console.log("Please enter a proper command.");
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

	  basic_cards.push(newBasic);

	});
}
