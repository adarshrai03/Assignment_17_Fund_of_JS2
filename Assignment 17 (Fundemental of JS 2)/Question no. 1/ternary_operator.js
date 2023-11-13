const prompt=require("prompt-sync")({sigint:true});

var num = prompt("Enter number");

// using ternary operator
var isEven = (num%2==0) ? 'Even' : 'Odd' ;

// print answer
console.log(isEven)