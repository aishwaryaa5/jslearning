let dolpinScore = [96,108,89];
let koalaScore = [88,91,110];
let avgDolphinScore = (dolpinScore[0]+dolpinScore[1]+dolpinScore[2])/3;
let avgKoalaScore = (koalaScore[0]+koalaScore[1]+koalaScore[2])/3;
if ((avgDolphinScore > 100)&&(avgKoalaScore>100)) {
	if (avgDolphinScore > avgKoalaScore) {
		console.log("Team Dolphins are the Winners!");
	}
	else
		if (avgDolphinScore == avgKoalaScore) {
			console.log("It's a Tie!");
		}
	else {
		console.log("Team Koala are the Winners!");
	}
}
else
if (avgKoalaScore<100) {
	console.log("Score of Team Koala is less than 100!");
}
else {
	console.log("Score of Team Dolphins is less than 100!");
}

/*Output for Data 1 (without restriction) -
"Team Dolphins are the Winners!"*/

/*Ouput for Data Bonus 1 -
"Team Koala are the Winners!"*/

/*Output for Data Bonus 2 - 
"It's a Tie!"*/