let massMark = 78, massJohn = 92, heightMark = 1.69, heightJohn = 1.95;
let bmiMark = massMark/(heightMark*heightMark);
let bmiJohn = massJohn/(heightJohn*heightJohn);
let markHigherBMI;
if (bmiMark>bmiJohn) {
	markHigherBMI = true;
	console.log("Mark's BMI ("+bmiMark+") is higher than John's BMI ("+bmiJohn+")!");
}
else {
	markHigherBMI = false;
	console.log("Mark's BMI ("+bmiMark+") is lower than John's BMI ("+bmiJohn+")!");
}