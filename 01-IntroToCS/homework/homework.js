'use strict'

function BinarioADecimal(num) {
  // tu codigo acac
  let array = num.split('');
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum = sum + Math.pow(2, num.length - 1 - i) * num[i];
  }
  return sum;
};
console.log(binarioADecimal(''));

console.log(BinarioADecimal("1011"));


function DecimalABinario(num) {
  // tu codigo aca
  let binarioArray = []
  let numero=0
  while(num > 1){
      binarioArray.push(num % 2)
      numero = Math.floor(num / 2)
  }

    binarioArray.push(numero);
    return parseInt(binarioArray.reverse().join(""));

}
console.log(binario());

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}