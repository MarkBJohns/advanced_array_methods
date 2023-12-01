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

//      Instead of writing a forEach() function, we can use 'map', which will take the array we want
//      to worth with, apply the stated change to each index in the array, and create a new array
//      with those applied changes. Check the functions below and test them on the webpage.

double.addEventListener('click',function(){
    let newArray=count.map(function(value){
        return value*2;
    })
    mapField.value=JSON.stringify(newArray);
})

triple.addEventListener('click',function(){
    let newArray=count.map(function(value){
        return value*3;
    })
    mapField.value=JSON.stringify(newArray);
})

quadruple.addEventListener('click',function(){
    let newArray=count.map(function(value){
        return value*4;
    })
    mapField.value=JSON.stringify(newArray);
})

// Each of the changes (*2, *3, *4) applied to each element in the array, and created a new array
//      that we populated the text field with.

// --------------------------------------------------------------

// On its own, the map function only uses 'return', so if you want to save the new array created,
//      you need to create a variable, which is why there was the newArray variable in the event
//      listeners above. However, the 'return' is still necessary for map to function, as without it
//      you'll get individual values rathere than an array.

// ----------------------------------------------------------------------------------------------------------------

//      USING MAPS

// --------------------------------------------------------------

//  Say you want to build a mono-type team for a gym leader, and you have a list of Pokemon to 
//      choose from:

const Pokemon=[
    {
        species : 'Absol',
        type    : 'Dark'
    },
    {
        species : 'Miltank',
        type    : 'Normal'
    },
    {
        species : 'Umbreon',
        type    : 'Dark'
    },
    {
        species : 'Arcanine',
        type    : 'Fire'
    },
    {
        species : 'Snorlax',
        type    : 'Normal'
    }
];

//      You only want to use Dark type Pokemon, so how can you use a map to filter them?

// First, you can isolate the specific keys you're looking for, in this case, the type.

const types=Pokemon.map(function(pokes){
    return pokes.type;
})

//      This will give you a new array with only the types of each Pokemon. Now if you want to 
//      get all of the Dark types out of it, you can make another map that looks specifically for
//      indexes of "Dark" and notes which number they are.

const getDark=types.map(function(type,index){
    return type==='Dark'?index:-1;
}).filter(function(index){
    return index!==-1;
})

//      You now have an array that says "[0,2]", where Absol and Umbreon are. 

function getTypes(Pokemon,getType){
    return getType.map(function(index){
        return Pokemon[index].species;
    })
}

//      Next, we make a map function that takes the array from getDark and uses them to find the
//      dark types in 'Pokemon'. In this case, 0 and 2. This is take Pokemon[0] and Pokemon[2], and
//      make a new array with the species of Pokemon.

const darkTypes=getTypes(Pokemon,getDark);

//      Finally, we have our list of Dark types by using the callback function getDark() along with
//      our Pokemon array. You can use these same steps for every other type, and because of how the
//      functions operate, you can change the order of the Pokemon or add as many more as you want 
//      and everything will still work.

const getFire=types.map(function(type,index){
    return type==='Fire'?index:-1;
}).filter(function(index){
    return index!==-1;
})

const fireTypes=getTypes(Pokemon,getFire);

const getNormal=types.map(function(type,index){
    return type==='Normal'?index:-1;
}).filter(function(index){
    return index!==-1;
})

const normalTypes=getTypes(Pokemon,getNormal);