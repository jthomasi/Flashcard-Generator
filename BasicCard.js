function Basic(front,back){
	this.front = front;
	this.back = back;
	this.printFront = function(){
		if (!this.front){
			console.log("There is no front.");
		}
		else {
			console.log("Front: "+this.front);
		}
	}
	this.printBack = function(){
		if (!this.back){
			console.log("There is no back.");
		}
		else {
			console.log("Back: "+this.back);
		}
	}
}

var hey = new Basic("hey there you", "hey yourself");

hey.printFront();
hey.printBack();

module.exports = Basic;