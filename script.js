let displayVar = "0";
let currentOp = add;
let prevOp;
let numA = 0;
let numB = 0;

let bSwitch = false;
let bReset = false;

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

const display = document.getElementById("display");
display.textContent = displayVar;

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

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");


zeroBtn.addEventListener('click', () => {
    console.log("zeroBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        //do nothing
    }else{
        displayVar = displayVar + "0";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
oneBtn.addEventListener('click', () => {
    console.log("oneBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar = "1";
    }else{
        displayVar = displayVar + "1";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
twoBtn.addEventListener('click', () => {
    console.log("twoBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar="2";
    }else{
        displayVar = displayVar + "2";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
threeBtn.addEventListener('click', () => {
    console.log("threeBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar="3";
    }else{
        displayVar = displayVar + "3";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
fourBtn.addEventListener('click', () => {
    console.log("fourBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar==0){
        displayVar="4";
    }else{
        displayVar = displayVar + "4";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
fiveBtn.addEventListener('click', () => {
    console.log("fiveBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar="5";
    }else{
        displayVar = displayVar + "5";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
sixBtn.addEventListener('click', () => {
    console.log("sixBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar="6";
    }else{
        displayVar = displayVar + "6";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
sevenBtn.addEventListener('click', () => {
    console.log("sevenBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar="7";
    }else{
        displayVar = displayVar + "7";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
eightBtn.addEventListener('click', () => {
    console.log("eightBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar="8";
    }else{
        displayVar = displayVar + "8";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});
nineBtn.addEventListener('click', () => {
    console.log("nineBtn");
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    if(displayVar=="0"){
        displayVar="9";
    }else{
        displayVar = displayVar + "9";
    }
    display.textContent = displayVar;
    console.log("displayVar: " + displayVar);
});


addBtn.addEventListener('click', () => {                                         
    console.log("add");
    //if(prevOp==null){
        //prevOp = currentOp;
    //}else{
        //prevOp = currentOp;
    //}
    prevOp = currentOp;
    currentOp = add;
    if(bSwitch==false){
        numA = Number(displayVar);
        bReset = true;
        bSwitch = true;
    }else if(bSwitch==true){
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);
        displayVar = numA;
        display.textContent = displayVar;
        bReset = true;
    }
});
subtractBtn.addEventListener('click', () => {
    console.log("subtract");
    prevOp = currentOp;
    currentOp = subtract;
    if(bSwitch==false){
        numA = Number(displayVar);
        bReset = true;
        bSwitch = true;
    }else if(bSwitch==true){
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);
        displayVar = numA;
        display.textContent = displayVar;
        bReset = true;
    }
});
multiplyBtn.addEventListener('click', () => {
    console.log("multiply");
    prevOp = currentOp;
    currentOp = multiply;
    if(bSwitch==false){
        numA = Number(displayVar);
        bReset = true;
        bSwitch = true;
    }else if(bSwitch==true){
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);
        displayVar = numA;
        display.textContent = displayVar;
        bReset = true;
    }
});
divideBtn.addEventListener('click', () => {
    console.log("divide");
    prevOp = currentOp;
    currentOp = divide;
    if(bSwitch==false){
        numA = Number(displayVar);
        bReset = true;
        bSwitch = true;
    }else if(bSwitch==true){
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);
        displayVar = numA;
        display.textContent = displayVar;
        bReset = true;
    }
});


equalBtn.addEventListener('click', () => {
    console.log("equal");
    numB = Number(displayVar);
    if(bReset==true){
        displayVar="0";
        bReset = false;
    }
    bSwitch = false;
    if(displayVar.localeCompare("Can't divide by zero")===0){
        console.log("display reset");
        numB = 0;
        displayVar = "0";
    }
    if(numB==0 && currentOp == divide){
        console.log("divide by zero");
        displayVar = "Can't divide by zero";
    }else{
        console.log(operate(currentOp, numA, numB));
        displayVar = operate(currentOp, numA, numB).toString();
    }
    display.textContent = displayVar;
});
clearBtn.addEventListener('click', () => {
    console.log("clear");
    displayVar = "0";
    numA = 0;
    numB = 0;
    display.textContent = displayVar;
});

