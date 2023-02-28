////////////////////OBJECTS//////////////////
/*
1.What is 'Object, Why do we use it
2.How can we create an 'Object'.
3.How can we reach a data from an object?
4.How can we update an 'Object'.
5.How can we store data in an 'Object'.
*/

/*Why - instead of array - property can be mentioned
*/
//  
// How we can create
var student = new Object();
student.student1
console.log(student);
// not oftenly used- every element in an object takes key value pair
var stu = {
    name: 'Samjhana',
    age: 9,
    school: 'Mahendra Sec',
};
// retreiving data from an objects

console.log(stu['name']);
// retreiving using dot-notation-   var.key  - no use if property has starating number and space
console.log(stu.school);

/////////////////////////UPDATE DATA OF AN OBJECT//////////////////////////////// 
var leonard = {
    name: 'Leonard',
    school1: 'Mahendra',
    age: 35,
};
// 1 is added to age
leonard.age+= 1;
console.log(leonard.age);

leonard['school1'] = 'MIT';
console.log(leonard.school1);

////////////STORING DATA/////////////
var student11 = {
    name : 'Amy',
    age: 25,
    friends: ['Howard', 'Harry', 'Rams'],
    bestFriend : {
        firstName: 'Penny',
        birthYear:1998,
    }

};
var bestFriendAmy = student11.bestFriend.firstName;
console.log(bestFriendAmy);

/////////////////////HOW TO ADD PROPERTY TO  OBJECTS//////////////////////
var colors = {
    
}

colors.orange = { code:123};
console.log(colors.orange.code);

colors.black ={ code: [4, 5, 6]}
console.log(colors.black.code);
console.log(colors.black.code[2]);

// COMPLEX
var blogPost = [
    {
        title: 'weather',
        content: 'it is rainy today',
        coments: [
            {
                name: 'John',
                lastName: 'rae',
            },
            {
                name: 'Hero',
                lastName: 'Magar',
            }
        ]
    },
       {
        title: 'weather',
        content: 'i donot like weather',
    },
];
// retrieving 1st element
console.log(blogPost[0]);
console.log(blogPost[0].title);

console.log(blogPost[0].coments[1].name);
////////////////QUIZ TIME////////////
/*
1. Create an array of objects called 'universilities'.Every object need to have 'name',
'year' properties.loop over this array and if 'hasgone' value is true then print a 
statement to the console which includes 'name' and 'year' properties. If 'hasgone' is false , just
print the 'name' property to the console 
 */
var universilities = [
    {
        name:'MIT',
        hasGone: false,
        year: 1890
    },
     {
        name:'Harvard',
        hasGone: true,
        year: 1900
    },
     {
        name:'Oxford',
        hasGone: true,
        year: 1800
    },
];

universilities.forEach(function(university){
    // university- arguement takes as an input from each element of array
    // university == each element of array
    if (university.hasGone===true){
        console.log(university.name+ university.year);
    }
    else{
        console.log(university.name);
    }
});
////////////////// OBJECTS METHODS //////////////////////
// adding function as property
var Sheldon ={
    name: 'Sheldon',
    age: 35,
    hasGone: true,
    friends:['Rams', 'Sita', 'Gita', 'Hari'],
    say: function () {
        console.log('say hi')
    }
};

// calling above function
Sheldon.say();

// practical example of adding function in an object - coments, post, tags
var Leonard = {
    name : 'Leonard',
    say : function () {
        console.log('say hi leonard')
    }
};
Leonard.say();
// console.log- console is var log is function inside it
// cumtomElemnts.deletePost
// customElements.deteleuser
// user.delete 

////////////THIS KEY WORD/////////////////////
/*
1. when it is called in an ordinary function
 -the 'this' keyword points to 'global object' which is 'window'.
2. When it is called in a method ( in an object)
- the 'this' keyword points to the object which has this method
*/


console.log(this);
// window object
// 
function addNumber(x, y) {
    console.log(x+y);
    console.log(this);
};
addNumber(10,20);
// method - method is the function attached to abject

var raj = {
    name: 'raj',
    year: 1989,
    sayHi: function () {
        console.log(this)
        console.log('say hi' + ' ' + this.name);
        // this is - raj object

        function somFunc() {
            console.log(this);
            // someFunc is not method because not the property of object but
            // this is method since it is attached to object sayHi
        }
        somFunc();
    }
};
raj.sayHi();

// sayHi is method now - a function attached to raj object