function Cloze(text,cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze, '');
	this.printFull = function(){
		console.log(this.text);
	}
	this.printCloze = function(){
		console.log(this.cloze);
	}
	this.printPartial = function(){
		console.log(this.partial);
	}
}

var hey = new Cloze("hey there you","you");

hey.printFull();
hey.printCloze();
hey.printPartial();