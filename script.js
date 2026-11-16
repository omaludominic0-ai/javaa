//VARIABLE DECLARATIONS

//VAR
//LET
//CONST
let name ="obi"

let myName ="homie";

console.log(myName); //HOMIE

myName = "Divine"

console.log(myName); //Divine

let myAge =16;

const myCourse ="frontend development"

//CASINS IN JAVASCRIPT

//uppercasing

//lower casing

//camel casing                 Examples: myName, myAge, theBoy

//paschal casing                Examples:TheBoy, HisNAame, HerName

//snake casing                   Examples:the_girl, her_name, her_Age

//screming snake casing            Examples:THE_CONST_VAR, MY_COURSE


// VARIABLES AND VALUES
//string
let herCourse = "Graphics Design"; //Double quotes
let hisCourse ='Mobile App development'; //single quotes
let yourGrade = `16`; // Template literal

let herEmailMessage = `you have scored ${yourGrade} out of 20 in your test`;
console.log(herEmailMessage);
console.log(herEmailMessage.length);

//NUMBERS
let solomonAge = 25;
solomonAge =30;

let pi = 3.142;
let expo = 10e5;

//BOOLEAM
const isSheAGirl = true;
const isSheMarried = false;

//NULL
let VictorName = null;

// UNDEFINED
let yourclass;

console.log("WHat is yourclass?", yourclass);

//OBJECTS : Denoted with curly brackets

let studentID = {
    age:16,
    course: "Frontend",
    school: " 0xVerse Academy",
    isEnrolled:true

}


//ARRAYS DENOTED WITH SQUARE BRACKETS

let myFruitsArray = [
    "Apple",
    "Oranges",
    "mangoes"

];
 
let myMixedArray =[
    16,
    "20",
    "Apple",
    true,
    {name: "divine"},
    null
]

const findlength =myMixedArray.length;

console.log(findlength);
const findIndex = myMixedArray.indexOf("Apple")
console.log(findIndex);