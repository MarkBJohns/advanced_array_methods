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