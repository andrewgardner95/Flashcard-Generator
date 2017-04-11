var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	this.print = function(){
		console.log(front + " " + back);
	}
}

module.exports = BasicCard;