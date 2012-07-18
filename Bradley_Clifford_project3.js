alert("JavaScript works!");

//Clifford Bradley
//SDI-1207
//Project 3
//"The Race"


//Global Variables
var drivers     = ["Takushito" , "Kyoto" , "Kurasaki" , "Taisuke"]
var vehicles    = ["Toyota Supra" , "Nissan Skyline R34" , "Audi RS8" , "Subaru WRX"]
var track1      = "Dragon Track";
var track2      = "Ninja Track";
var race1       = 25000;
var race2       = 50000;
var finals      = 100000;
var dragonTrack = true;
var ninjaTrack  = true; 


//Money Count
var winnings = function(money, raceWins){
	var moneyWon = (money * raceWins);
		console.log("With that win, his total winnings are: $" + moneyWon);
};

//Drivers Count
var driversLeft  = function(totalDrivers, eliminated){
	var driversWon = (totalDrivers - eliminated);
		console.log("We now have " + driversWon + " drivers remaining.");
};

//Final Object for Season Wrap-Up
var raceWinner = {
		  name: "Taisuke",
		  car : "Subaru WRX",
	     money: function (){
	    			 var raceMoney = race1 + race2 + finals},				
moneyBreakdown: ["Round 1 Win: $25,000" , "Round 2 Win: $50,000", "Finals Win: $100,000"],
    seasonWins: 32,
   seasonChamp: true,
};
	   
var conclusion = function(drifter1, drifter2, drifter3, drifter4){
		console.log("We'd like to thank our fans for coming out. " + drifter1 + ", " +
			drifter2 + ", " + drifter3 + " and " + drifter4 + "... You are all champions" +
			" for making it here!");
};






//Race Start
console.log("Welcome to the 2012 Japanese Drifting Championship. Today we have a great lineup for our spectators:");

for ( i = 0; i < drivers.length; i++){
	console.log("Racer:" + drivers[i] + " Car:" + vehicles[i]);

};

//Race One Takushito vs. Kyoto
	console.log("Our first race will pit " + drivers[0] + " versus his nemesis, " + drivers [1] + ".");
	
if (dragonTrack = true){
	console.log("Please direct your attention to the Dragon Track for our first battle behind the wheel!");
};	
	
	console.log(drivers[1] + " takes the victory!");
	
winnings(25000, 1);



//Race Two Kurosaki vs. Taisuke
console.log("Next up, we have " + drivers [2] + " against " + drivers[3] + ".");
	console.log(drivers[3] + " edges out " + drivers[2] + " by a hair for the victory!");
	
if (ninjaTrack = true){
	console.log("Over on the Ninja Track we will have " + drivers[2] + " against " + drivers[3] + ".");

};
winnings(25000, 1);

//Listing Remaining Drivers
driversLeft(4, 2);
	console.log(drivers[1] + " and " + drivers[3]);

//driversLeft conditional	
if (driversLeft = 2){
	console.log("Ladies and Gentlemen, we will return with the Final Round of races after these announcements.")
} else {
	console.log("More racing coming up after these announcements by our sponsors.");
};
	
//Race Three Kyoto vs. Taisuke
console.log("Okay, everyone, prepare for your grande finale: " + drivers[1] + " versus " + drivers[3]);
	console.log(drivers[3] + " takes the Championship today! Let's tally up his stats today...");
	
console.log(raceWinner);

	
conclusion ("Kyoto", "Kurasaki", "Taisuke", "Takushito");