let displayVar = "0";
let currentOp = add;
let numA = 0;//null
let numB = 0;//null

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
    if(displayVar=="0"){
        //do nothing
    }else{
        displayVar = displayVar + "0";
        display.textContent = displayVar;
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
oneBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="1";
    }else{
        displayVar = displayVar + "1";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
twoBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="2";
    }else{
        displayVar = displayVar + "2";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
threeBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="3";
    }else{
        displayVar = displayVar + "3";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
fourBtn.addEventListener('click', () => {
    if(displayVar==0){
        displayVar="4";
    }else{
        displayVar = displayVar + "4";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
fiveBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="5";
    }else{
        displayVar = displayVar + "5";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
sixBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="6";
    }else{
        displayVar = displayVar + "6";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
sevenBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="7";
    }else{
        displayVar = displayVar + "7";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
eightBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="8";
    }else{
        displayVar = displayVar + "8";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});
nineBtn.addEventListener('click', () => {
    if(displayVar=="0"){
        displayVar="9";
    }else{
        displayVar = displayVar + "9";
    }
    display.textContent = displayVar;
    console.log(displayVar);
});

addBtn.addEventListener('click', () => {
    console.log("add");
    currentOp = add;
    if(numA=="0"){//==null
        numA = Number(displayVar);
        displayVar = "0";
        display.textContent = displayVar;
    }
});
subtractBtn.addEventListener('click', () => {
    console.log("subtract");
    currentOp = subtract;
    if(numA=="0"){
        numA = Number(displayVar);
        displayVar = "0";
        display.textContent = displayVar;
    }
});
multiplyBtn.addEventListener('click', () => {
    console.log("multiply");
    currentOp = multiply;
    if(numA=="0"){
        numA = Number(displayVar);
        displayVar = "0";
        display.textContent = displayVar;
    }
});
divideBtn.addEventListener('click', () => {
    console.log("divide");
    currentOp = divide;
    if(numA=="0"){
        numA = Number(displayVar);
        displayVar = "0";
        display.textContent = displayVar;
    }
});

equalBtn.addEventListener('click', () => {
    console.log("equal");
    numB = Number(displayVar);
    console.log(operate(currentOp, numA, numB));
    displayVar = operate(currentOp, numA, numB).toString();
    display.textContent = displayVar;
});
clearBtn.addEventListener('click', () => {
    console.log("clear");
    displayVar = "0";
    numA = 0;//null
    numB = 0;//null
    display.textContent = displayVar;
});


