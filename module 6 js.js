/* Задание 6.1 
function result(){
  let array=["gjl", 33, 78, null, 0, "fljl"];
  let countEven=0 , countOdd=0 , countZero=0;
    for (var i=0; i<array.length; i++){
        if (array[i]==0) countZero++;
        else if(typeof (array[i])!='number') console.log(`this is not number: ${array[i]}`);
        else if (array[i]%2==0) countEven++;
        else  countOdd++;
    }
  console.log(`this is the quantity - ${countEven} - even numbers`);
  console.log(`this is the quantity - ${countOdd} - odd numbers`)
  console.log(`this is the quantity - ${countZero} - zero`) 
} */

/* Задание 6.2
function result(value) {
  let simple = 'the number is simple', complex = 'The number is complex', wrong = 'the number is incorrect';
  if (value > 1 && value <= 1000 ) {
   for (let i = 2; i <= x / 2; i++) {
     if (value % i === 0) {
        return complex;
      } else return simple;
    }
  } else return wrong;
  
}
result(11); */

/* задание 6.3
function func1(num1){
  return function func2(num2){
    return num1+num2;
  }
}
console.log(func1(1)(2)); */

/* Задание 6.4
function result(from, to) {
  let current = from;
  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) clearInterval(timerId);
    current++;
  }, 1000);
}
result(5, 15); */

/* Задание 6.5
let result = (x,n) => x**n;
console.log(result(5, 3)); */