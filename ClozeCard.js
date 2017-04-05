function Cloze(text,cloze){
	this.text = text;
	this.cloze = cloze;
	this.printFull = function(){
		if (!this.text) {
			console.log("No text was entered!");
		}
		else {
			console.log("Full Text: "+this.text);
		}
	}	
	this.printCloze = function(){
		if (!this.cloze){
			console.log("No cloze.");
		}
		else {
			console.log("Cloze: "+this.cloze);
		}
	}
	this.printPartial = function(){
		var partial = this.text.replace(this.cloze, '');
		if (partial == this.text){
			console.log("No cloze or cloze was not in text.");
		}
		else {
			console.log("Partial Text: "+partial);
		}
	}
}

var hey = new Cloze("hey there you", "hey");

hey.printFull();
hey.printCloze();
hey.printPartial();

module.exports = Cloze;