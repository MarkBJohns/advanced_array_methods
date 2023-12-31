describe('The rock, paper scissor game',function(){
    it('should return a proper option, or return "invalid" if something goes wrong',function(){
        expect(rockPaperScissors(1)).toEqual('Rock');
        expect(rockPaperScissors(2)).toEqual('Paper');
        expect(rockPaperScissors(3)).toEqual('Scissors');
        expect(rockPaperScissors(20)).toEqual('Invalid');
    })
})

describe('Arithmetic functions',function(){
    it('should perform all the basic mathematical functions accurately,',function(){
        expect(add(10,10)).toEqual(20);
        expect(subtract(10,10)).toEqual(0);
        expect(multiply(10,10)).toEqual(100);
        expect(divide(10,10)).toEqual(1);
        expect(divide(10,0)).toEqual('error');
    })
})

describe('Calculate function',function(){
    it('should run all arithmetic functions accurately',function(){
        expect(calculate(3,3,add)).toEqual(6);
        expect(calculate(3,3,subtract)).toEqual(0);
        expect(calculate(3,3,multiply)).toEqual(9);
        expect(calculate(3,3,divide)).toEqual(1);
    })
})

describe('All Math Function',function(){
    it('should run all functions accurately',function(){
        let arithmetic=[add,subtract,multiply,divide];
        expect(allMath(5,5,arithmetic)).toEqual([10,0,25,1]);
    })
})

describe('Changing colors with forEach()',function(){
    it('should properly shuffle arrays',function(){
        let testArr=[1,2,3,4];
        let shuffled=shuffleArray(testArr);
        expect(shuffled).toEqual(jasmine.arrayContaining(testArr));
        expect(shuffled.length).toEqual(testArr.length);
    })
})

describe('Filter function getting the correct letters',function(){
    it('should separate vowels from consonants',function(){
        expect(vowels).toEqual(['a','e','i','o','u']);
        expect(consonants).not.toEqual(jasmine.arrayContaining(['a','e','i','o','u']));
    })
})

describe('Getting types filtered out of the Pokemon list',function(){
    it('should get an array with just the types',function(){
        expect(types).toEqual(['Dark','Normal','Dark','Fire','Normal','Normal','Fire','Dark','Normal','Fire','Normal']);
    })
    it('should accurately filter out types',function(){
        expect(getTypes(Pokemon,getNormal)).toEqual(normalTypes);
        expect(getTypes(Pokemon,getDark)).toEqual(darkTypes);
        expect(getTypes(Pokemon,getFire)).toEqual(fireTypes);
    })
})

describe('Checking for any instances with some()',function(){
    it('should return true or false depending on if element conditions are met',function(){
        let hasNormalType=hasType(Pokemon,'Normal');
        let hasWaterType=hasType(Pokemon,'Water');
        let hasSalamence=hasPokemon(Pokemon,'Salamence');
        let hasBlissey=hasPokemon(Pokemon,'Blissey');
        expect(hasNormalType).toEqual(true);
        expect(hasWaterType).toEqual(false);
        expect(hasSalamence).toEqual(false);
        expect(hasBlissey).toEqual(true);
    })
})

describe('Checking for unanimous instances with every()',function(){
    it('should return true or false depending on every element sharing a condition',function(){
        let testArrOne=[{type:'Test'},{type:'Test'}];
        let testArrTwo=[{type:'Test'},{type:'Fail'}];
        expect(monoType(testArrOne,'Test')).toEqual(true);
        expect(monoType(testArrTwo,'Test')).toEqual(false);
    })
})

describe('Using find() to filter for types of elements',function(){
    it('should return the correct element or undefined is none are applicable',function(){
        let findCharizard=findPokemon(Pokemon,'Charizard');
        let findMiltank=findPokemon(Pokemon,'Miltank');
        expect(findCharizard).toEqual(undefined);
        expect(JSON.stringify(findMiltank)).toEqual('{"species":"Miltank","type":"Normal","dexNum":"241"}');
        let findDark=findType(Pokemon,'Dark');
        let findFlying=findType(Pokemon,'Flying');
        expect(JSON.stringify(findDark)).toEqual('{"species":"Absol","type":"Dark","dexNum":"359"}');
    })
})

describe('Finding the correct PC box with findIndex()',function(){
    it('should move on to a new box every 6 indexes',function(){
        let resultOne=whichBox(Pokemon,'Absol');
        let resultTwo=whichBox(Pokemon,'Magmar');
        let resultThree=whichBox(Pokemon,'Porygon-Z');
        expect(resultOne).toBe('Absol is in Box 1');
        expect(resultTwo).toBe('Magmar is in Box 2');
        expect(resultThree).toBe('Porygon-Z is in Box 3');
    })
    it('should alert user if Pokemon is not in PC (index of -1)',function(){
        let result=whichBox(Pokemon,'Missingno');
        expect(result).toBe('Missingno is not in the PC');
    })
})

describe('creating new objects from arrays with reduce()',function(){
    let testArr=[{type:'yes'},{type:'no'},{type:'yes'}];
    it('should count the amount of types and give accurate key/value pairs',function(){
        expect(countTypes(testArr)).toEqual({"yes":2,"no":1});
    })
})