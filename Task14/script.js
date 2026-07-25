// sum of first n numbers
let n = 11;
let sum = 0;
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log("The sum of first " + n + " numbers is: " + sum);

//print table of n

// let n = 5;
//Table of n

let a =19;
for (let i = 1; i <= 10; i++) {
  console.log(a +" * " + i + " = " + a * i);
}

//number is prime or not
let b=29;
let isPrime = true;
console.log("number to check is prime or not is :+",b);
if (b === 1) {
  console.log("Number is not prime");
} else {
  for (let z = 2; z < Math.sqrt(b); z++) {
    if (b % z === 0) {
      console.log("Number is not prime");
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("Number is prime");
  }
}

//Factorial
// let result=1;
// while(n>1){
//   result = result*n;
//   n--;
// }
// console.log("Factorial of " + n + " is: " + result);
//factors of n
let c = 34
for (let i = 1; i <= c; i++) {
  if (c % i === 0) {
    console.log("Factors of " + c + " is: " + i);
  }
}

//sum of digits of num

let num = 139;
console.log("Number is: " + num);
let sumofdigits = 0;
for (let s = num; s > 0; s--) {
  digit = num%10;
  sumofdigits += digit;
  num = Math.floor(num/10);
}
console.log("Sum of digits is: " + sumofdigits);

//armstrong
let d = 153;
let temp = d;
let numofdigits = String(temp).length;
let summ = 0;
let rem = 0;

while (temp > 0) {
  rem = temp % 10;
  summ += Math.pow(rem, numofdigits);
  temp = Math.floor(temp / 10);
}

if (summ === d) {
  console.log("number " + d + " is armstrong.");
} else {
  console.log("number " + d + " is not armstrong.");
}