let massMark = 78, massJohn = 92, heightMark = 1.69, heightJohn = 1.95;
let bmiMark = massMark/(heightMark*heightMark);
let bmiJohn = massJohn/(heightJohn*heightJohn);
let markHigherBMI;
if (bmiMark>bmiJohn) {
	markHigherBMI = true;
	console.log(markHigherBMI);
}
else {
	markHigherBMI = false;
	console.log(markHigherBMI);
}

/*let massMark = 95, massJohn = 85, heightMark = 1.88, heightJohn = 1.76;
The output for this data is - false*/