let a =5;
let b=10;
let c=75;
let d= 28;

// a%2?console.log("The number " + a + " is odd."):console.log("The number " + a + " is even.");
// b%2?console.log("The number " + b + " is odd."):console.log("The number " + b + " is even.");
// c%2?console.log("The number " + c + " is odd."):console.log("The number " + c + " is even.");
// d%2?console.log("The number " + d + " is odd."):console.log("The number " + d + " is even.");

checkEvenOdd(a);
checkEvenOdd(b);
checkEvenOdd(c);
checkEvenOdd(d);

function checkEvenOdd(num){
    if(num%2==0){
        console.log("The number " + num + " is even.")
    }else{
        console.log("The number " + num + " is odd.")
    }
}