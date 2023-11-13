// Here we are testing eligiblity age of vote using ternary opeartor
const prompt=require("prompt-sync")({sigint:true});
let age = prompt("Enter Age : ");

let result = (age<18) ? "You cannot vote" : "You can vote" ;
console.log(result);