let arrNum = [4, 8, 2, 11, 8, 6, 7, 10];
console.log("Array:", arrNum);


// function findMax(arr){
// let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log("Maximum number:", findMax(arrNum));

//find maximum number in an array
function findMax(arr, callback) {
  return callback(arr);
}

let maxValue = findMax(arrNum, function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
});

console.log("Maximum number:", maxValue);

//sum of elements of an array

const sumofelements = (arr)=>{
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total
}

console.log("Sum of all elements:",sumofelements(arrNum));

//count number of odd elements:

let count =0;

const oddCount = (arr) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            count++;
        }
    }
    return count;
}

console.log("Count of odd numbers",oddCount(arrNum));

 
