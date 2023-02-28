// Variables- Are to store data, which we can use over and over later
// var var-name = data to be stored as var-name
// var name starts with either leter,_ or $ not other symbol
var vname = 'Alex';
console.log(vname);

//Basics Js Data types- 5 types
// 1. String- it is used for text, written between quotation
// 2.Number- Integers, Decimal Number, percentage- not betn quotation
// 3.Boolean- Logical Data - True or Flase only takes one logical data either true or false
// 4.Undefined-Data type of a variable that does not yet have a value- does not havevalue yet but assigns value later
// 5.Null : None existent-


// Js is dynamic no need to define data type, reads automatically

// boolean data type
var isRegistered = true;
console.log(isRegistered);

var job;
console.log(job)
// in console it will be undefined

job='studet';
console.log(job);
// now job var is defined;

//  type coercion
var student = 'Alex';
var number = 20;
console.log(student + '' + number);
// number var is converted to string


// Undefined variables - later can be defined
var schoolName, hasCourse;
schoolName='Mahendra Sec.';
hasCourse='true';

console.log(schoolName + 'has 35 courses' + hasCourse)
// boolean data type is also converted into string type


// variable Mutation /* can also be used to comment out coments out */
// variable mutation is to change the data
var homeTown='Pathari';
homeTown = 'Jante';
console.log(homeTown);
// var mutation - works only on js not in other language

// alert is used to pop up alert(var-name)

// prompt is used to input value from user prompt('string?')  target to store eg console.log();

// BASIC OPERATORS + - * /
// function written in js in a special way
// we can define given eg using undefined var eg distanceAlex, distance sam and var can be neglected
var distanceAlex = 20 - 12;
console.log(distanceAlex);
var distanceSam = 20 -7;
console.log(distanceSam);

// in above eg 20 is used multiple - so we can assign 20 as a variable

// Logical Operators
var distanceToSchool, distanceToHome;
 
distanceToHome = 14;
distanceToSchool = 6;
var isCloser = distanceToHome < distanceToSchool;
console.log(isCloser);
// isCloser is now boolean var - so result in console is false;

// BOOLEAN LOGIC - Takes value the given statement is either true or false
// Component Operators
/* if x=10
 > greater than
 >= Greater or equal to
 < less than
 <= less or equal to x=='10' string- true Type coercion i.e x is number but '10' is string so false;
 == equalto (just look at the value) x!=5 true
 != not equal 
 === equal to (look at both value and datatype) x===10 is true (takes number) x==='10' false
 !== (value and data-type)
 if x=10 and y=8
 && AND (x>7)&&(x==='10') - false
 || OR
 ! NOT !(y=='8') - false
*/
var isLoggedIn = true;









