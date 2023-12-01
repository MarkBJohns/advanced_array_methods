console.log('Advanced Array Methods');
const rpsBtn=document.getElementById('rpsBtn');
const rpsField=document.getElementById('rps');
const firstNumField=document.getElementById('firstnum');
const secondNumField=document.getElementById('secondnum');
const doMath=document.querySelector('#arithmetic button');
const answerField=document.getElementById('answer');
const colorBlocks=document.querySelectorAll('.colorblock');
const colorBtn=document.getElementById('color')
const double=document.getElementById('dub');
const triple=document.getElementById('trip');
const quadruple=document.getElementById('quad');
const mapField=document.getElementById('mapfield');
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
    if(y!==0){
        return x/y;
    }else return;
    
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

// console.log(arithmetic[2](2,3));

//      This line, because of the parentheses, executes the code. And this time, it has parameters,
//      so the console will log '6', the result of executing the code with 2 and 3.

// ----------------------------------------------------------------------------------------------------------------

//      CALLING FUNCTIONS

// --------------------------------------------------------------

// Say you're working on the beginnings of a calculator app. You need to be able to recall any of
//      the arithmetic functions inside your calculation function. You can do this by making a 
//      calculate function, and using two numbers with a function as your arguments.

function calculate(a,b,funct){
    return funct(a,b);
}

// Now you can enter any of the arithmetic functions into your calculate function and it will do the
//      appropriate function to the number arguments. For example:

// console.log(calculate(2,3,add));

//      will equal "5",

// console.log(calculate(7,3,subtract));

//      will equal "4", and so on.

// But say you want to perform a series of functions on the same set of arguments. This goes back
//      to functions being saved as variables, and those variables being saved in an array.

function allMath(a,b,arithmetic){
    let results=[];
    for(let func of arithmetic){
        results.push(func(a,b));
    }
    // console.log(results);
    return results;
}

// Because 'arithmetic' is an array, you can loop through each index of the array and perform each
//      of those functions. The allMath function then takes each of those results and adds them to 
//      our 'results' array. Un-comment console.log line to see the solution in the console, or try
//      entering two numbers and clicking the Do Math button to test out more numbers.

doMath.addEventListener('click',function(e){
    e.preventDefault();
    let solution='';
    let firstNum=parseFloat(firstNumField.value);
    let secondNum=parseFloat(secondNumField.value);
    if(!isNaN(firstNum)&&!isNaN(secondNum)){
        let solution=allMath(firstNum,secondNum,arithmetic);
        answerField.value=solution.join(', ');
    }else{
        answerField.value='Invalid Input';
    }
    firstNum='';
    secondNum='';
})

// ----------------------------------------------------------------------------------------------------------------

//      FOREACH()

// --------------------------------------------------------------

// An simple native callback function for arrays is forEach(), which is similar to a for/in loop.
//      It will run a callback function for each value in the array argument, and then return 
//      "undefined". The argument for forEach() is a function, along with whatever name you give for
//      the indexed items.

let colorArray=['maroon','darkolivegreen','goldenrod','midnightblue'];

// We have an array of four colors here, and on the webpage there's a row of 4 buttons. We can click
//      the "Color" button to take the four colors in the array and make them the background for
//      each of the buttons. First we need to make a callback function that randomizes the order, so
//      the backgrounds will change every time we click the button as opposed to just once.

function shuffleArray(array){
    let newArray=array.slice();
    // We don't want to change the original colorArray, so we make a copy using slice()
    for(let i=newArray.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [newArray[i],newArray[j]]=[newArray[j],newArray[i]];
    }
    return newArray;
}

//      And now that we have our randomized array, we can add an event listener to go through each
//      index of the array, and apply that color to a button's background. An easy way to do this is
//      with the forEach() function.

colorBtn.addEventListener('click',function(){
    let shuffled=shuffleArray(colorArray);
    // we create a new temporary array by calling back the shuffleArray() function for colorArray
    colorBlocks.forEach(function(block){
        let randomColor=shuffled.pop();
        block.style.backgroundColor=randomColor;
        // we take the last color in the 'shuffled' array, remove it from the array, and apply it
        //  to the current button element. This repeats until the array is empty and all blocks 
        //  have a new background.
    })
})

// A for/of loop has effectively the same function as the forEach() function, so it's largely up to
//      whatever you find more convenient.

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                              MAP

// ----------------------------------------------------------------------------------------------------------------

// A simple way to create new iterate through an array, make changes, and return a new array
//      (without changing the initial array) is with the 'map' function. For example, if we want to
//      double every number in an array, we can do that very efficiently with map.

let count=[1,2,3];

double.addEventListener('click',function(){
    let newArray=count.map(function(value){
        return value*2;
    })
    mapField.value=JSON.stringify(newArray);
})