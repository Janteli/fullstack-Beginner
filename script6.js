/*
1. What is DOM-Document Object Model
2. Why id DOM manupulation important
3. simple websites
4. Select and Change System
 */
// Importants
// 1. Games
// 2. Scroll Effects
// 3. Menus
// 4. Forms
// 5. Interaction with the User

// INTRODUCTION TO DOM
// manipulating HTML and CSS using JavaScript- as object-document- console.dir(document)

// 1. select and manipulate-
//a. selection process var var-name =document.querySelector('element from html to be selected')-stored to the var
var h1Element = document.querySelector('h1');
//b. manipulation process
h1Element.style.color = 'blue';

//Simple Animaion
var isYellow = false;
var bodyElement = document.querySelector('body')
setInterval(() => {
    if (isYellow) {
        bodyElement.style.background = 'white';
    }
    else {
        bodyElement.style.backgroundColor = 'yellow';
    }
    isYellow = !isYellow;
}, 1000);
// the above function- if bg-color is white then changes into yellow and vice-versa
////////////////////// SELECT METHODS //////////////////
/*
1. document.getElementById()
2. document.getElementsByClassName()
3. document.getElementsByTagName()-h1
4. document.querySelector()- for all above
5. document.querySelectorAll()- selects all
 */
// document.getElementById()
var selectWithId = document.getElementById('example');
console.log(selectWithId);

// getElementsByClasName()
var selectWithClass = document.getElementsByClassName('hello');
console.log(selectWithClass);

// getElementsByTagName()
var selectWithTag = document.getElementsByTagName('h2');
console.log(selectWithTag);

// document.querySelectors- newr method- css style selector- sekect one elemnt at once
// if id should be selected using this method - #id-name and .class-name for class
var selectWithQuery = document.querySelector('h1');
console.log(selectWithQuery);

// document.querySlectorsAll()
// selects two or more
var selectAll = document.querySelectorAll('.all');
console.log(selectAll);

/////////////////// MANIPULATION ////////////////////////
/*
1. Changing the style of an element
2. Adding and removing classes
3. Change the content of an element 
4.Change the 'Atrributes(src, href...)
*/
var divToManipulate = document.querySelector('.background');

// 1. Changing the style of an element
divToManipulate.style.fontSize.height = '50px';
divToManipulate.style.width = '400px';
divToManipulate.style.backgroundColor='red';
divToManipulate.style.fontSize ='30px';
divToManipulate.style.border = '5px solid black';

// 2.adding and removing classes targeted-var.classList.add('class to be added')
var divTo = document.querySelector('.new');
// divTo.classList.add('addclass');
// divTo.classList.remove('addclass');
// toggles - checks wether .addClass is added or not, if yes then removes and vice versa
divTo.classList.toggle('addclass');
divTo.classList.toggle('addclass');
// first-toggle adds the class and second one removes;
/*
3. Changing the contet
*/
var paragraph = document.querySelector('#content');

// console.log(paragraph.textContent);
// text content does not include strong - tag

paragraph.textContent='Here I am to rebuild MYSELF.huh really';
console.log(paragraph.textContent);
// Another property as text content - but it also includes HTML tag like strong i.e innerHTML
paragraph.innerHTML='Here I am to rebuild <strong>MYSELF</strong>.huh'
console.log(paragraph.innerHTML);

// 4. Manipulating the 'Atrribute.
// eg. changing the source of img
var myLink = document.querySelector('a');

myLink.getAttribute('href');
console.log( myLink.getAttribute('href'));
myLink.setAttribute('href','http://www.facebook.com');
// changing the link
console.log(myLink.getAttribute('href'));