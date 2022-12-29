const { checkSeatStatus } = requires ('../homework');

it( 'checkSeatStatus should be a function' ()=>{ 
    expect(typeof checkSeatStatus).toBe('function')
});

it(' should throw a TypeError if first parameter is not a string', ()=>{
    expect ( ()=> checkSeatStatus(7)).toThrow(new TypeError('First parameter is not a string'));

})

it(' should throw a TypeError if second parameter is not a number ', ()=>{
    expect ( ()=> checkSeatStatus('A' , '3')).toThrow(new TypeError('Second parameter is not a number'));
    
})