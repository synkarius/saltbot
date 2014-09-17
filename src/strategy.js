function Strategy(sn) {
	var btn10 = document.getElementById("interval1");
	var btnRed = document.getElementById("player1");
	var btnBlue = document.getElementById("player2");
	var p1name = btnRed.getAttribute("value");
	var p2name = btnBlue.getAttribute("value");
	var sName = sn;
	var prediction = null;
	var totals = parseInt(document.getElementById("balance").innerHTML.replace(/,/g, ''));
	this.execute = function(info) {
		return null;
	};
	this.getWinner = function() {
		var newTotals = parseInt(document.getElementById("balance").innerHTML.replace(/,/g, ''));
		var winner = null;
		if (newTotals > totals) {
			winner = prediction;
		} else if (newTotals < totals) {
			winner = (prediction == p1name) ? p2name : p1name;
		}
		return winner;
	};
	this.getP1Name = function() {
		return p1name;
	};
	this.getP2Name = function() {
		return p2name;
	};
	this.getP1Button = function() {
		return btnRed;
	};
	this.getP2Button = function() {
		return btnBlue;
	};
	this.getMinimumBetButton = function() {
		return btn10;
	};
	this.getStrategyName = function() {
		return sName;
	};
	this.setPrediction = function(p) {
		prediction=p;
	};
	this.getPrediction = function() {
		return prediction;
	};

}

function CoinToss() {
	this.base = Strategy;
	this.base("ct");

	this.execute = function(info) {
		var pred = (Math.random() > .5) ? this.getP1Name() : this.getP2Name();
		this.setPrediction(pred);		
		return pred;
	};
}

function MoreWins() {
	this.base = Strategy;
	this.base("mw");
	this.execute = function(info) {
		return null;
	};
}

CoinToss.prototype = Strategy;
MoreWins.prototype = Strategy;