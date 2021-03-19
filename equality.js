let numNeighbours = parseInt(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) {
	console.log("Only 1 border!");
}

/*When '===' is used, the output generated is No Borders since it gives out false as an output if the types of the datas are different.*/

else
if (numNeighbours > 1) {
	console.log("More than 1 border");
}
else {
	console.log("No borders");
}