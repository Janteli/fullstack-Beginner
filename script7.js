//////////////////// EVENT HANDLERS ///////////////////////////////
/*
1. Click to a button
2. Hover on a link
3. Drag ve Drop
4. Press The Enter Key
*/

// Select and Add
// add element.addEventListner(type, functionTOcall)
var button = document.querySelector('#btn1');
var title = document.querySelector('#call');
button.addEventListener('click',function (){
    // calling the function just when button is clicked
    console.log('you clicked the button');
    title.style.backgroundColor = 'red';
});

// 
var listParent = document.querySelector('ul');

listParent.addEventListener('click',function (){
    console.log('You clicked the ul');
    listParent.style.backgroundColor='blue';
});

// oncliking the individual li
var listItems = document.querySelectorAll('li');
console.log(listItems);
// selects all member of parent in array form
// listItems[0].- for reaching
// DOM - for reaching each element - use loop
// for (var i = 0; i<= listItems.length; i++){
//     listItems[i].addEventListener('click', function () {
//         // listItems[i]- reaches to every element of array
//         this.style.color =' white';
//         // this  whatever items is selected takes values as i value for loop
//     })
// };

// when the element is clicked call the function

var oakParagraph = document.querySelector('#paragraph');

function toggleBackground() {
    oakParagraph.classList.toggle('toggleBackground');
}
oakParagraph.addEventListener('click', toggleBackground);
// web site event reference mdn

// var firstTodoItem = document.querySelector('.todoItem');
// firstTodoItem.addEventListener('mouseover', function () {
//     firstTodoItem.style.backgroundColor = 'blue';
//     firstTodoItem.style.color = 'white';

//     firstTodoItem.addEventListener('mouseout', function () {
//         firstTodoItem.style.backgroundColor = 'white';
//         firstTodoItem.style.color = 'black';
//     })


// })
var todoListItem = document.querySelectorAll('.todoItem');

for(var i=0; i<todoListItem.length; i++) {
    todoListItem[i].addEventListener('mouseover', function() {
        this.style.backgroundColor='blue';
        this.style.color = 'white';
    })
    todoListItem[i].addEventListener('mouseout', function() {
        this.style.backgroundColor='white';
        this.style.color='black';
    })
    todoListItem[i].addEventListener('click', function () {
        this.classList.add('okay');
    })
}
