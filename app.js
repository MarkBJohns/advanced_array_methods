console.log('Advanced Array Methods');
// ----------------------------------------------------------------------------------------------------------------

//                                     ADVANCED ARRAY METHODS

// ----------------------------------------------------------------------------------------------------------------

//      FROM

// --------------------------------------------------------------

// All of these methods will involve iterating through arrays, so it's important to remember that
//      you can convert data from their current state into arrays via the from() function.

const banana='banana';

const bananaArr=Array.from(banana);

// Entering 'banana' into the console will return a string, while entering 'bananaArr' will return
//      an array with each letter as an element. This now allows you to loop functions through 
//      'banana' that would otherwise be impossible since it's a string.

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
    }else return 'error';
    
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

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                              FILTER

// ----------------------------------------------------------------------------------------------------------------

// While forEach() returns a new array with each element transformed in someway, sometimes rather
//      than changing every element, you want to take elements as they are, but only if they meet
//      certain conditions.

const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
'v','w','x','y','z'];

// Take the alphabet, 26 elements separated into vowels and consonants. We can use the filter 
//      function to create two new arrays with only the proper letter type, as you can see below.

const vowels=letters.filter(function(value,index,array){
    return value==='a'||value==='e'||value==='i'||value==='o'||value==='u';
})
const consonants=letters.filter(function(value,index,array){
    return value!=='a'&&value!=='e'&&value!=='i'&&value!=='o'&&value!=='u';
})

// On the webpage you can see the two array values being placed in the text field when you click 
//      the corresponding buttons.

letterField.value=letters.join(', ');

vowelBtn.addEventListener('click',function(){
    letterField.value=vowels.join(', ');
})
consonantBtn.addEventListener('click',function(){
    letterField.value=consonants.join(', ');
})
resetBtn.addEventListener('click',function(){
    letterField.value=letters.join(', ');
})

// The filter function allows you to look for a variety of parameters, such as the lenght of strings,
//      whether certain letters are contained in the element, etc, etc. Importantly, just like with
//      forEach(), the original array is not affected, and you need a variable to save the value
//      being returned by the filter function.

// The filter function works exclusively with Booleans, so every filter function will be based on
//      whether an element is or is not a particular thing.

// --------------------------------------------------------------

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      MAPS + FILTER

// --------------------------------------------------------------

//  Say you want to build a mono-type team for a gym leader, and you have a list of Pokemon to 
//      choose from:

const Pokemon=[
    {
        species : 'Absol',
        type    : 'Dark',
        dexNum  : '359'
    },
    {
        species : 'Miltank',
        type    : 'Normal',
        dexNum  : '241'
    },
    {
        species : 'Umbreon',
        type    : 'Dark',
        dexNum  : '197'
    },
    {
        species : 'Arcanine',
        type    : 'Fire',
        dexNum  : '059'
    },
    {
        species : 'Snorlax',
        type    : 'Normal',
        dexNum  : '143'
    },
    {
        species : 'Slaking',
        type    : 'Normal',
        dexNum  : '289'
    },
    {
        species : 'Ninetales',
        type    : 'Fire',
        dexNum  : '038'
    },
    {
        species : 'Zoroark',
        type    : 'Dark',
        dexNum  : '571'
    },
    {
        species : 'Blissey',
        type    : 'Normal',
        dexNum  : '242'
    },
    {
        species : 'Magmar',
        type    : 'Fire',
        dexNum  : '126'
    },
    {
        species : 'Porygon-Z',
        type    : 'Normal',
        dexNum  : '474'
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

//      Now you have a new array that only has the indexes of dark types.

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

// As a reminder, the map function will return an array, but the array isn't saved anywhere unless
//      you create something for it to be saved to. This is why all of these functions are being 
//      saved as variables, so the new array created has something you can reference to get them.

// --------------------------------------------------------------

// Go on the webpage to see the filtering in action. Clicking the type buttons will fill the text
//      field with Pokemon from the list that correspond with the button type.

const names=Pokemon.map(function(pokes){
    return pokes.species;
})

pokeList.innerText=names.join(', ');

noramlBtn.addEventListener('click',function(){
    pokeField.value=normalTypes.join(', ');
})
darkBtn.addEventListener('click',function(){
    pokeField.value=darkTypes.join(', ');
})
fireBtn.addEventListener('click',function(){
    pokeField.value=fireTypes.join(', ');
})

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                             SOME

// --------------------------------------------------------------

// If you need to see whether any element in an array meets a certain condition, you can use the
//      some() function. Some() will iterate through the array and see if at least one element 
//      meets a specified condition, and if it does, it will return "true". If no elements meet
//      the conditions, it will return "false".

// Let's say you're about to take on the Ghost type gym, so you want to see if you have any Dark
//      types in your PC. You can take the Pokemon array and add a some() function to check for
//      the dark type.

function hasType(arr,type){
    return arr.some(function(pokemon){
        return pokemon.type===type;
    })
}

//      Now if you "Pokemon" and "'Dark'" into your hasType() function, you can check if you do
//      (true) or don't (false) have any Dark types available.

const hasDarkType=hasType(Pokemon,'Dark');

//      In this case, hasDarkType will equal "true", and checking for other types you may not have
//      will return "false".

const hasBugType=hasType(Pokemon,'Bug');

//      In this case, hasBugType will return "false", because there are no bug types in the array.

// You can expand this to any parameter, such as looking for a specific Pokemon. All you need is
//      a very similar function checking for the species instead of the type:

function hasPokemon(arr,species){
    return arr.some(function(pokemon){
        return pokemon.species===species;
    })
}

//      Now you can check to see if you have a specific Pokemon in your PC.

const hasSlaking=hasPokemon(Pokemon,'Slaking');

const hasFlygon=hasPokemon(Pokemon,'Flygon');

//      hasSlaking will return "true", as it's in the Pokemon array, while hasFlygon will return
//      "false"

somePokemon.innerText=names.join(', ');

someDark.addEventListener('click',function(){
    typeField.value=JSON.stringify(hasDarkType);
})
someBug.addEventListener('click',function(){
    typeField.value=JSON.stringify(hasBugType);
})
slakingBtn.addEventListener('click',function(){
    typeField.value=JSON.stringify(hasSlaking);
})
flygonBtn.addEventListener('click',function(){
    typeField.value=JSON.stringify(hasFlygon);
})

// ----------------------------------------------------------------------------------------------------------------

//                                          EVERY

// --------------------------------------------------------------

// If you need every element in the array to meet specified conditions rather than just one, you
//      can use the every() function instead.

// Say you're entering a mono-type team and you need to make sure each Pokemon on your team has the
//      same type.

const monoGround=[
    {
        species:    'Donphan',
        type:       'Ground'
    },
    {
        species:    'Sandslash',
        type:       'Ground'
    },
    {
        species:    'Hippowdon',
        type:       'Ground'
    },
];

const monoFighting=[
    {
        species:    'Machamp',
        type:       'Fighting'
    },
    {
        species:    'Hitmonlee',
        type:       'Fighting'
    },
    {
        species:    'Grumpig',
        type:       'Psychic'
    }
]

const groundNames=monoGround.map(function(pokes){
    return pokes.species;
})
const fightNames=monoFighting.map(function(pokes){
    return pokes.species;
})

// You can use the every() function to go through your team and make sure the type you want applies
//      to every Pokemon in your team. If every element meets the conditon, every() will return
//      "true", and if not, "false".

function monoType(arr,type){
    return arr.every(function(pokemon){
        return pokemon.type===type;
    })
}

const allGround=monoType(monoGround,'Ground');

const allFighting=monoType(monoFighting,'Fighting');

// Entering allGround will return "true", as all of the Pokemon in monoGround are Ground types,
//      while allFighting will return "false", because Grumpig is not a Fighting type.

groundField.innerText=`Ground Team: ${groundNames.join(', ')}`;
fightField.innerText=`Fighting Team: ${fightNames.join(', ')}`;

groundBtn.addEventListener('click',function(){
    everyTest.value=JSON.stringify(allGround);
})
fightBtn.addEventListener('click',function(){
    everyTest.value=JSON.stringify(allFighting);
})

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                           FIND

// --------------------------------------------------------------


// Similar to filter(), say you're looking for a very specific element, or you need a type of 
//      element but the specific one doesn't matter. You can use the find() method to see if your
//      array contains an element that meets specifications, and return the first element that 
//      does, or return "undefined" if none of them do.

const numbers=[1,2,3,4,5];

//      Say we need a number divisible by 5, we can sort through the array to see if any of the
//      numbers apply.

const divisibleByFive=numbers.find(function(val){
    return val=(val%5===0);
});

//      If you check the console, divisibleByFive will return '5', becaue 5 is the only number that
//      applies. But if you need a number divisible by 2...

const divisibleByTwo=numbers.find(function(val){
    return val=(val%2===0);
});

//      ... divisibleByTwo will return '2', even though both 2 and 4 apply, because find() only
//      returns the first applicable element rather than all of them.

function findType(arr,searchType){
    return arr.find(function(pokemon){
        return pokemon.type===searchType;
    })
}

// Now if you're fighting a Grass gym and want to grab whatever available Fire types you have, you
//      can run a find() method on your Pokemon array to get the first one in the list.

const findFire=findType(Pokemon,'Fire');

//      This is go through 'Pokemon' until it finds a Fire type, in this case, Arcanine.

// Say you need to find a certain species for a trade. You can look through your array to see if
//      that Pokemon is in the list.

function findPokemon(arr,searchName){
    return arr.find(function(pokemon){
        return pokemon.species===searchName;
    })
}

//      Now you can just plug the name of the Pokemon you're looking for into your search function
//      and it will return the Pokemon if you have one.

const findSnorlax=findPokemon(Pokemon,'Snorlax');
const findBlaziken=findPokemon(Pokemon,'Blaziken');

findField.innerText=names.join(', ');
findFireBtn.addEventListener('click',function(){
    findAnswer.value=JSON.stringify(findFire);
})
findSnorlaxBtn.addEventListener('click',function(){
    findAnswer.value=JSON.stringify(findSnorlax);
})
findBlazikenBtn.addEventListener('click',function(){
    findAnswer.value=JSON.stringify(findBlaziken);
})

// ----------------------------------------------------------------------------------------------------------------

//                                           FINDINDEX

// --------------------------------------------------------------

// If you need to find the location of an element rather than just if the element exists, you can
//      can use the findIndex() method. It will loop through the array to find the first element
//      that meets your condition, and rather than return the element, it will return the index of
//      the element. If there is no instance of the condition you want in the array, findIndex()
//      will return -1.

const waldoSearch=['citizen','citizen','clown','shopkeep','citizen','Waldo','citizen','officer'];

// Say we're searching for Waldo in a sea of other people. We can search for him using the
//      findIndex() method.

function findWaldo(arr,name){
    return arr.findIndex(function(val){
        return val==='Waldo';
    })
}

//      findWaldo() will iterate through waldoSearch until it finds 'Waldo', and rather than just
//      confirm he's there, it will return an index number.

const wheresWaldo=findWaldo(waldoSearch,'Waldo'); 

//      Knowing where something is can have benefits over just confirming it exists or getting 
//      more specific information.

// For instance, if the "Pokemon" array represents Pokemon in a PC, each PC has multiple boxes that
//      only hold a certain amount of Pokemon in them. If you're looking for a specific Pokemon,
//      you can use the findIndex() method to see which box they're in.

function whichBox(arr,name){
    let boxCount=1;
    const index=arr.findIndex(function(val,i){
        if(val.species===name){
            return true;
        }
        if((i+1)%5===0){
            boxCount++;
        }
        return false;
    })
    let result;
    if(index!==-1){
        result=`${name} is in Box ${boxCount}`;
    } else{
        result=`${name} is not in the PC`;
    }
    return result;
}

//      Assuming you can fix 5 Pokemon per box, you can use the findIndex() method to get the index
//      for that Pokemon, then use the number to see which Box they're in.

const whereIsUmbreon=whichBox(Pokemon,'Umbreon');
const whereIsNinetales=whichBox(Pokemon,'Ninetales');
const whereIsTyranitar=whichBox(Pokemon,'Tyranitar');

findIndexList.innerText=names.join(', ');
umbreonBtn.addEventListener('click',function(){
    findIndexAnswer.value=JSON.stringify(whereIsUmbreon);
})
nintalesBtn.addEventListener('click',function(){
    findIndexAnswer.value=JSON.stringify(whereIsNinetales);
})
tyranitarBtn.addEventListener('click',function(){
    findIndexAnswer.value=JSON.stringify(whereIsTyranitar);
})

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                           REDUCE

// --------------------------------------------------------------


// While the most complicated of the array methods covered so far, reduce() is useful because it
//      takes an array and converts it to a single element. It will iterate through the array 
//      performing a callback function for each element, but rather than returning/transforming
//      an array or boolean, it will "accumulate" a value for each iteration and return the final
//      accumulation. The easiest example to understand would be an addition reduce() function.

const addNumberArr=[1,2,3,4];

function addAllElements(arr){
    return arr.reduce(function(accumulator,currentVal){
        return accumulator+currentVal;
    })
}

// A reduce() function has two parameters, an accumulator, and a current value. However, the
//      second parameter does not need to specified, as if it's not given, the function will
//      automatically choose the first value in the array. In this case, addAllElements() started
//      with 1 and added each of the currentVal elements from there

const addNumberArrSum=addAllElements(addNumberArr);

//      Now addNumberArrSum will return 10, because 1+2+3+4=10.

// If you do want to manually add a second parameter, it goes at the end of the function rather 
//      than the beginning:

function addAllElementsPlusTen(arr){
    return arr.reduce(function(accumulator,currentVal){
        return accumulator+currentVal;
    },10);
}

//      The ",10" at the end of the function give 10 as the first currentVal value, so rather than
//      starting at the first index (1) like addAllElements did, it started at the second parameter
//      and added the first index to that. 

const addNumberArrSumPlusTen=addAllElementsPlusTen(addNumberArr);

//      Because it started with 10, addNumberArrSumPlusTen will equal 20.

// --------------------------------------------------------------

// While this doesn't seem particularly useful or complex enough to require its own method, there
//      are more useful uses for reduce().

const newArr=[2,14,8,23,15];

// Here we have an array with out of order number values. If we want to find the biggest value in
//      the array, we can use reduce() to go through each of the elements and save the biggest 
//      value as the accumulator.

function findMaxVal(arr){
    return arr.reduce(function(max,currentVal){
        if(currentVal>max){
            return currentVal;
        }
        return max;
    })
}

const newArrMax=findMaxVal(newArr);

//      As the function iterates through newArr, assigns 2 as the 'max' (accumulator) until it
//      gets to 14, and assigns that as the new 'max'. It doesn't assign 8 as it's less than 14,
//      but then assigns 23, then doesn't assign 15, and returns 23 as the final value.

// --------------------------------------------------------------

// The previous example can just as easily be accomplished with the max() method, but it shows that
//      reduce() isn't soley for mathmatical functions and can return types of elements rather than
//      only performing functions.

// Say you want to go through the Pokemon array to see how many of each type there are. Rather 
//      than getting a new array, you can use reduce() to get an object that creates a count for 
//      each type.

function countTypes(arr){
    return arr.reduce(function(type,currentMon){
        const types=currentMon.type;
        if(type[types]==null){
            type[types]=1;
        }else{
            type[types]+=1;
        }
        console.log(type);
        return type;
    },{});
}

// To see how this function works, un-comment the console.log line. The second parameter, an empty
//      object, is the first accumulator in this reduce() function. On the first iteration, it 
//      goes through Absol, a Dark type, which saves 'types' as 'Dark'. The conditional checks to
//      see if our empty object has a key called 'Dark' already, and since it does not, it adds it.

// As it iterates, it gets the type of each Pokemon, adds it to the object if it's not already
//      present, or adds to the count if it is. By the end of the function, we have a list of each
//      of the types present in the array, as well as how many of them there are.

const typeCountObj=countTypes(Pokemon);
