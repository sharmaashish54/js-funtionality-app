let P = 1000; // Principal amount
let R = 0.05; // Annual interest rate (5%)
let T = 3; // Time in years
let n = 12; // Number of times interest applied per year

 let amount = P * Math.pow(1 + (R / n), n * T); 
 let result = amount - P; // Compound interest

console.log("The compound interest after " + T + " years is:", result);