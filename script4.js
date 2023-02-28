///////////////////////////////////ARRAY////////////////////////////////////////////
/*
1. Defining an array and adding data to the array
2. Built- array methods(push, pop,...)
3. TO-DO list
*/
// Array is to put numbers of data together
var student1 ='Samjhana';
var student2 = ' Sivani';
var student3 = 'Mahendra';
var student4 = 'Sandip';

// we can store above data in a single var
var students = ['samjhana', 'Sivani', 'Mahendra', 'Sandip']
// starting member = index 0 , i.e samjhana = index 0, sivani = indconslole
console.log(students[0]);
students[0] = 'amy';
console.log(students);

// adding member in array
students[4]= 'Howard';
console.log(students);
students[7]= 'John';
console.log(students);

// var cats = [];
// new cats = new Array();

var commonData = ['John', 25, true, null];
var cars = ['Mercedes', 'Audi', 'BMW', 'volvo'];
var cars_length = cars.length;
console.log(cars_length);
///////////////////////////ARRAY METHODS/////////////////////////////
//  6 Methods are there;
/*
1. Push/Pop
2. Shift/Unshift
3. indexOf
4. slice

Usefull websites- mdn,
*/
// Push = adds the element on array at last
var family = [ 'Bhawana', 'Yana', 'Yangnim', 'Suraz'];
family.push('Alex','Bhisma');
console.log(family);

// pop opposite of push- removes the last element;
family.pop()
console.log(family);

// Shift and Unshift - same as push/pop but from begining;
var toys = ['teddy', 'monoster car'];
toys.unshift('spiderman');
console.log(toys);

toys.shift();
console.log(toys);


// indexOf- position of members of array - note indes of first member is 0
var subs = [ 'english', 'nepali',' social', 'science', 'population'];

console.log(subs.indexOf('nepali'));

// slice- to copy different portion of array

var sub = subs.slice(1,3);
console.log(sub);

var otherSubs = subs.slice();
console.log(otherSubs);
/*
var books = ['Harry Potter', 'Robbit', 'Hunger game','little prince'];
1. Acess the last element of the books array using
the length of the array and print it to the console

var films =[
    ['hobbit1','hobbit2','hobbit3'],
    ['matrix1','matrix2', 'matrix3'],
    ['godfather1','godfather2','godfather3']
]
print the godfaher3 film from the films array to the console
*/

var books =['Harry Potter','Robbit','Hunger Game','Little Prince'];
// console.log(books[3]);
console.log(books[books.length-1]);

var films =[
    ['hobbit1','hobbit2','hobbit3'],
    ['matrix1','matrix2', 'matrix3'],
    ['godfather1','godfather2','godfather3']
]
// third element of third array
console.log(films[2][2]);
/////////////////////////ARRAY ITERATION///////////////////////////
/*
1.Using for loop for array iteration- coments, posts
2. USing forEach for Array Iteration
3. Comparision of for loop and forEach
*/
var books =[ 'Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prme'];
// Using loop to print members of above Array
for (var i =0; i< books.length; i++){
    console.log(books[i]);
};
// forEach method as above
books.forEach(function(book){
    // function is for each element of array
    console.log(book);
});
///////////////////////Quiz/////////////////
/*
1. Create an array which includes numbers between 0 and 20 by using push methd
2. By using this array youcreated in the first question , yu will print
thenumbers that can be divided by 5 to the console using the 'forEach
'Method*/
// Question 1
var nUm = [];
for(var i=0;i<=20; i++){
    nUm.push(i);
}
console.log(nUm);
// Question no 2
nUm.forEach(function (jpt/*arguement takes input -each element */) {
    if(jpt % 5===0) {
        console.log(jpt);
    }
})


