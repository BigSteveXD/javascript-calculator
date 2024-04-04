let displayVar = "0";
let currentOp = add;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num, num2){
    return operator(num, num2);
}

//console.log(operate(add, 3, 2));


const zeroBtn = document.getElementById("0");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");

zeroBtn.addEventListener('click', () => {
    displayVar = displayVar + "0";
    console.log(displayVar);
});
oneBtn.addEventListener('click', () => {
    displayVar = displayVar + "1";
    console.log(displayVar);
});
twoBtn.addEventListener('click', () => {
    displayVar = displayVar + "2";
    console.log(displayVar);
});
threeBtn.addEventListener('click', () => {
    displayVar = displayVar + "3";
    console.log(displayVar);
});
fourBtn.addEventListener('click', () => {
    displayVar = displayVar + "4";
    console.log(displayVar);
});
fiveBtn.addEventListener('click', () => {
    displayVar = displayVar + "5";
    console.log(displayVar);
});
sixBtn.addEventListener('click', () => {
    displayVar = displayVar + "6";
    console.log(displayVar);
});
sevenBtn.addEventListener('click', () => {
    displayVar = displayVar + "7";
    console.log(displayVar);
});
eightBtn.addEventListener('click', () => {
    displayVar = displayVar + "8";
    console.log(displayVar);
});
nineBtn.addEventListener('click', () => {
    displayVar = displayVar + "9";
    console.log(displayVar);
});

/*
function zeroBtn(){
    displayVar = displayVar + "0";
}
function oneBtn(){
    displayVar = displayVar + "1";
}
function twoBtn(){
    displayVar = displayVar + "2";
}
function threeBtn(){
    displayVar = displayVar + "3";
}
function fourBtn(){
    displayVar = displayVar + "4";
}
function fiveBtn(){
    displayVar = displayVar + "5";
}
function sixBtn(){
    displayVar = displayVar + "6";
}
function sevenBtn(){
    displayVar = displayVar + "7";
}
function eightBtn(){
    displayVar = displayVar + "8";
}
function nineBtn(){
    displayVar = displayVar + "9";
}
*/

