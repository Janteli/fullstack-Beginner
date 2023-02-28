// LOOPS(repetitive situation
/*Understanding the purpose of Loops-
-Print Numbers from 1 to 10 on the console(
    this is where loops come into play.)
eg in social media numbers of coments are print using loops
) */

/*Understanding the concept of DRY code*
-DRY - DO NOT REPEAT YOURSELF/ withour repeating - print the same type of data
console.log(1)
console.log(2)
console.log(3)
.
.
.

/*Writing simple 'While' Loops*/

// WHILE LOOPS
/*Makes the code repeat as soon as a certain situation is correct
while(situation ){
    target to print
    give condition how to be print(if not condition is false and becomes infinite loops)
    if the situations is correct, it will ren the code here
} */
var number = 1;

while (number<11) {
    console.log(number);
    // number++; 
    // number = number + 1
    number+=2;
}
// h/w
// 1.Print even numbers from 132 to 148 on the console
// 2.Print numbers between 25 and 100, divisible by 7, to the console

var even = 132;
while(even<=148) {
    console.log(even);
    even +=2;
    
}
// var count = 25;
// while( count<=100) {
//     if ( count % 7 === 0){
//         console.log(count)
//     }
// }

// for loops
// for(var va-name= var-initial-value; condition; increament/decreament or operation how loops u want to pring){target}


for(var num = 1; num<11; num++) {
    console.log(num)
}
// odd numbers between 132 and 148
for(var i = 132; i<=148; i++){
    if(i%2 !==0){
        console.log(i);
    }
}

// divisible by 5 and 7 betweenn 25 and 125
for(vari=25; i<=125; i++){
    if((i%7===0) && (i%5 ===0)){
    console.log(i)
    }
}

// CONTINUE AND BREAK
/*
1. Check the numbers from 1 to 10 and just print the numbers that can be
    divided by 2 on the console
2. Check the numbers from 1 to 10 and just print the first number
    that can be divided by 2 on the console
 */
// Break out the loop and to conitnue
// 1. CONTINOUS STATEMENT
console.log('continue statement');

// for(var i= 1; 1<=10; i++){
//     if ( i % 2 !==0 ) continue;
//     // if number is not even then continue, printing even

//         console.log(i);
//     }

    console.log('break statement');

    for(var i= 1; i<=10; i++) {
        if(i%2===0) {
            console.log(i);
            break;
            // if finds the first value value , then loops breaks out.
        }
    }


