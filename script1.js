// CONDITIONAL STATEMENTS- USING LOGIC
// Password = database- logged in(true) if false then redirect to another page
// Three basic js-keys if, else if , else
var grade;
grade= 30;
if(grade< 40){
    console.log('you can not go to next class.');
}
else if (grade>= 40 && grade<45){
    console.log('You can not go to next class but you can enter the exam');
}
else{
    console.log('you can go to next class');
}
//  h/w
var students;
students= 45;

if (students<18){
    console.log('You can not enter cafe');
}
else if(students>18 && students<23){
    console.log('You can enter the cafe but can not drink alcohol');
}
else {
    console.log('You can enter the cafe and drink alcohol');
}

// TERNARY OPERATOR
var obtained = 43;

grade<45 
? console.log('You can not go to next class') 
: console.log("you can go to class");

var result = obtained < 45 
? 'failure':
'success';
console.log('result');

if(obtained< 45){
    result='failure';
} else {
    result= 'success';
}
console.log(result)
// to assign value to variable from operator use ternary operators


// SWITCH STATEMENTS
var day;
day = 'monday';
switch (day) {
    case 'saturday' :
        console.log('I like saturday');
        break;
    case 'monday' : 
    console.log(' I do not like monday');
        break;
    case 'friday' :
        console.log( 'I really like friday');
        break;
    default:
        console.log ( ' I do no know the day');
        break;
}

var marks = 38;

switch(true) {
    case (marks<40) :
        console.log('you can not go to next class');
        break;
    case(marks>=40 && marksgrade < 45):
    console.log('You can not go to next class but you can enter the exam');
        break;
    default :
    console.log('you can go to next class');
    break;
}


// CODE QUIZ
/*Alex, Sara and Nancy are in the same class.
In math class, Alex's grades are 90, 80, 95.
Sara's grades are 89, 76, 8
Nancy's grades are 42,98,83

1.calculate the average score for each student, the save that value into a variable.
2.Fint the highest average and then console log the student who has the highest average
3.Averages may be the same*/
var gradeAlex = (80+90+95)/3;
var gradeSara = ( 89+76+98)/3;
var gradeNancy = (42 + 98+83)/3;
console.log('Alex average grade', gradeAlex);
console.log('Sara average grade', gradeSara);
console.log('Nancy average grade', gradeNancy);

if(gradeAlex> gradeSara && gradeSara>gradeNancy){
    console.log('Alex has highest grade', gradeAlex)
} else if (gradeSara>gradeAlex && gradeAlex>gradeNancy){
    console.log('Sara',gradeSara)
}
else if (gradeNancy>gradeAlex && gradeAlex>gradeSara){
    console.log('Nancy',gradeNancy)
}
else {
    console.log('Equal')
}

switch(true) {
    case(gradeAlex>gradeSara && gradeSara>gradeNancy):
        console.log('Alex wins', gradeAlex)
        break;
    case(gradeSara>gradeAlex && gradeAlex>gradeSara):
        console.log('Sara wins', gradeSara);
        break;
    case ( gradeNancy>gradeSara && gradeSara>gradeAlex):
        console.log('Nancy wins', gradeNancy);
        break;
    default :
        console.log('Eaual')
        break;
    
    }


