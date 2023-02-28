/*
1. Function Declaration ve Function Expressions
2. Difference between 'console.log  and 'return' statement
3. How to pass arquements to functions
*/

///////////////////////FUNCTIONS////////////////////////
// var can store a single value but function can many
// 1st declare and call 
// Funtion decoration
// 1st step - declaration
function sayHello () {
    // code how the function you want work
    console.log('Hello World')
}
// 2nd call the function
 sayHello();

//  can work on multiple lines and DRY -do not repeat
function doSomthing(){
    console.log('Hello World');
    console.log('GoodBye World');
    console.log('How are you');
    
}
 doSomthing();
 doSomthing();
/////////////////////////////ARGUEMENTS/////////////////////////////////
// arguements- how we can write functions that can take inputs
function sayHi(name) {
    console.log('Hi' + ' ' + name);
}
// name is a arguement that somthing is passed in

sayHi('sara');
sayHi('John');
// in just above line sara is input value to arguement -name

function cube(number) {
    console.log(number*number*number)
}
cube(3);

function bmi(length, weight) {
    console.log(weight/ (length + length));
}

bmi(1.80, 85);

// practical - practice eg - web-game , score for every player
function checkUserInfo (email, password) {
if((email=='suraz@gmail.com') &&(password=='bwin')) {
    console.log('You are logged in');
}
else{
    console.log('Check your email or password')
}
}

checkUserInfo('suraz@gmail.com', 'bwin');
checkUserInfo('suraz', 'bwin');


///////////////////////////FUNCTION RETURN KEYWORD/////////////////////////////
// the key return in function stores the funtion output later we can use
function square(n){
return (n*n);
}
;

var final = square(4)*4;
console.log(final);

function same(j){
    if(j===25){
        return 25;
    }
    return j*j
}
var result = same(4);
console.log(result);
var result = same(25);
console.log(result);

function calculateAge(birthYear) {
    return 2023 - birthYear;
}
var age = calculateAge(1990);
console.log('This is the recent age' + " " + age);

function enterCafe(Age) {
    if (Age<18) {
        return 'You can not enter cafe'
    }
    return 'you can enter cafe'
}

var cafe = enterCafe(17);
console.log(cafe);

////////////////////////////FUNCTION DECORATION AND FUNCTION EXPRESSION////////////////////////////////
// function decoration function funcn name(){}
// function expression- defining var = funcn()

// function quiz
/*
1. Create a function called substraction, this function takes two arguements x and y
    then substract one of these arguements from the other and returns the result.
    Then console log the resule
2. Declare a function calles 'isOdd' this function sis gonna take one arguement
    and it is gonna check if that arguement is an odd number , then it needs to 
    return Boolean and console that
3. Declare a function called addition, it is gonna take one arguement, then it needs
    to sum up all numbers from 1 to that arguement and return the total value. then 
    console it
*/

// 1
function substraction(x, y){
    return x - y;
}
var result= substraction(15,10);
console.log(result);

// 2 
function isOdd (odd) {
    if( odd%2 ===0){
        return 'False';
    }
    return 'True'
}
var res = isOdd(25);
console.log(res);

// 3
function addition(add){
    var res = 0;
    for(var i = 1; i<=add;i++){
        res = res + i;
    }
    return res
}
var addResutl = addition(3);
console.log(addResutl);

///////////////////////////FUNCTION SCOPE////////////////////////////////////
// SCoping basically answers the question, where can we access the variable or function
// In javascript, each funcn creates a scope which is space or environment in which 
// the variable defines or accessible
var Surname='Magar';
function sayName() {
    var Name ='Alex';
    console.log(Name);
    console.log(Surname);
    // var name is bouded by curly braces of funcn 
}
sayName();
// console.log(Name); this is undefined

// var-outside is parent scope of a funcn- function can acess the value of var but not reversible




