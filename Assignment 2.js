var country = "India";
var continent = "Asia";
var population = 1381.59;
console.log(country);
console.log(continent);
console.log(population);

var isIsland = false;
var language;
console.log(typeof(isIsland));
console.log(typeof(population);
console.log(typeof(country));
console.log(typeof(language));

language = "Kannada";

/*Since the values of 'country', 'continent' and 
'isIsland' wont change they can be declared with the
keyword 'const'. */

/*Since 'population' changes constantly it can be 
declared by the keyword 'var', so that it can be
overriden as and when the value changes. 
var population = 1381.59; */

/*Since 'language' is a relative attribute and can 
change with different states, so it can be declared 
with the keyword 'let'. 
let language = "Kannada"; */

const country = "India";
const continent = "Asia";
const isIsland = "false";

country = "United States";
console.log(country); 
/*Since a constant value is overriden, it shows an
error while running the code. */