describe('The rock, paper scissor game',function(){
    it('should return a proper option, or return "invalid" if something goes wrong',function(){
        expect(rockPaperScissors(1)).toEqual('Rock');
        expect(rockPaperScissors(2)).toEqual('Paper');
        expect(rockPaperScissors(3)).toEqual('Scissors');
        expect(rockPaperScissors(20)).toEqual('Invalid');
    })
})