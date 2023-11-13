// here we have to find out the number is positive negative or zero using nested ternary operator

const prompt=require("prompt-sync")({sigint:true});

let num = prompt("Enter the number : ");
let result = (num > 0)
    ? "Positive"
        : num < 0 
        ? "Negative"
        : "Zero" ;

console.log("The number is : "+result);        