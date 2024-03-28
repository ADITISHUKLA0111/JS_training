function Practise(c,d,x,y,z,num)
{
    console.log(c+d);
console.log(c.length);
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.slice(y,z));
console.log("numerical operations :")
console.log(x+y/z);
  console.log(x+y);
  console.log(x-y);
  console.log(x/z);
console.log(Math.sqrt(x));


    
}
function roundToDecimal(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
}
Practise("hello","world",9,1,3)

let num =24.456
let roundedNum = roundToDecimal(num, 2); 
console.log(roundedNum);
