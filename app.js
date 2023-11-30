
console.log('Advanced Array Methods');
const rpsBtn=document.getElementById('rpsBtn');
const rpsField=document.getElementById('rps');
// ----------------------------------------------------------------------------------------------------------------

//                                     ADVANCED ARRAY METHODS

// ----------------------------------------------------------------------------------------------------------------

//      CALLBACK FUNCTIONS

// --------------------------------------------------------------

// Say you have a function that generates a random number between 1 and 3.

function randomNumGen(){
    return Math.floor(Math.random()*3)+1;
}

//      This doesn't do a whole lot by itself, but say you wanted to randomly choose between three
//      options, such as a game of rock, paper, scissors. You can make however many applicable
//      functions you need to, and pass that randomNum variable as the argument, as you can see
//      below:

function rockPaperScissors(num){
    let weapon='';
    if(num===1){
     weapon='Rock';
    }else if(num===2){
     weapon='Paper';
    }else if(num===3){
     weapon='Scissors';
    }else return 'Invalid';
    console.log(weapon);
    return weapon;
 }

// On the webpage, you can see a 'RPS' button with a text field. We can use the functions we've
//      created to make it so clicking the button will generate one of the options. 

rpsBtn.addEventListener('click',function(){
    let randomNum=randomNumGen();
    let weapon=rockPaperScissors(randomNum);
    rpsField.value=weapon;
})

// --------------------------------------------------------------

// Looking at the eventListener function, so can see that two function are nested inside the main
//      function (randomNumGen and rockPaperScissors). Functions that use other functions as 
//      arguments are referred to as Callback Functions.

// ----------------------------------------------------------------------------------------------------------------

//      DEFINING FUNCTIONS

// --------------------------------------------------------------

// The first way we learned to define a function was called 'function declaration', and it involves
//      the 'function' keyword, the name given to the function, and any parameters it may have.

function declaration(){
    console.log('This is a declaration function');
}

// Another way to define a function, useful for callback functions, is to save the function as a 
//      variable, called a 'function expression'. Rather than naming the function directly, we 
//      define a variable as an anonymous function.

const expression=function(){
    console.log('This is a function expression');
}

// ----------------------------------------------------------------------------------------------------------------

//      FUNCTIONS AS VARIABLES

// --------------------------------------------------------------

// Because JavaScript treats functions as values, they can be saved like variables, and variables
//      can be saved in arrays.

const arithmetic=[add,subtract,multiply,divide];

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

// For Javascript to differentiate between a function as a value or a function to be executed, you
//      put parantheses after the name.

// console.log(add);

//      If you un-comment this above line, the console will write out the entire code for the 'add'
//      function.

// console.log(add());

//      If you un-comment this above line, the console will log 'NaN'. This is because there were
//      no parameters entered, but the important distinction is that you're logging the result of
//      an executed function rather than the code, or 'value' of the function.

// --------------------------------------------------------------

// To access a specific index of an array, we use brackets and the index number.

// console.log(arithmetic[2]);

//      Again, un-commenting will just log the value of the 'multiply' function rather than executing
//      it.

console.log(arithmetic[2](2,3));