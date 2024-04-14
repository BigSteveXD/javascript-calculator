let displayVar = "0";
let currentOp;
let prevOp;
let numA = 0;
let numB = 0;
let prevBtn = "";

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
    prevBtn = "0";
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
    prevBtn = "1";
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
    prevBtn = "2";
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
    prevBtn = "3";
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
    prevBtn = "4";
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
    prevBtn = "5";
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
    prevBtn = "6";
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
    prevBtn = "7";
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
    prevBtn = "8";
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
    prevBtn = "9";
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
    prevBtn = "operator";

    if(currentOp==undefined){//default
        currentOp = add;
        prevOp = currentOp;
    }else{//change currentOp
        prevOp = currentOp;
        currentOp = add;
    }
    if(bSwitch==false){//numA empty so put displayVar into numA
        numA = Number(displayVar);
        bReset = true;//reset display
        bSwitch = true;//switch to fill numbB
    }else if(bSwitch==true){//numA filled so put displayVar into numB
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);//put result into numA
        numB = 0;
        displayVar = numA;//put result into displayVar
        display.textContent = displayVar;
        bReset = true;//reset display
    }
});
subtractBtn.addEventListener('click', () => {
    console.log("subtract");
    prevBtn = "operator";

    if(currentOp==undefined){
        currentOp = subtract;
        prevOp = currentOp;
    }else{
        prevOp = currentOp;
        currentOp = subtract;
    }
    if(bSwitch==false){
        numA = Number(displayVar);
        bReset = true;
        bSwitch = true;
    }else if(bSwitch==true){
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);
        numB = 0;
        displayVar = numA;
        display.textContent = displayVar;
        bReset = true;
    }
});
multiplyBtn.addEventListener('click', () => {
    console.log("multiply");
    prevBtn = "operator";

    if(currentOp==undefined){
        currentOp = multiply;
        prevOp = currentOp;
    }else{
        prevOp = currentOp;
        currentOp = multiply;
    }
    if(bSwitch==false){
        numA = Number(displayVar);
        bReset = true;
        bSwitch = true;
    }else if(bSwitch==true){
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);
        numB = 0;
        displayVar = numA;
        display.textContent = displayVar;
        bReset = true;
    }
});
divideBtn.addEventListener('click', () => {
    console.log("divide");
    prevBtn = "operator";

    if(currentOp==undefined){
        currentOp = divide;
        prevOp = currentOp;
    }else{
        prevOp = currentOp;
        currentOp = divide;
    }
    if(bSwitch==false){
        numA = Number(displayVar);
        bReset = true;
        bSwitch = true;
    }else if(bSwitch==true){
        numB = Number(displayVar);
        numA = operate(prevOp, numA, numB);
        numB = 0;
        displayVar = numA;
        display.textContent = displayVar;
        bReset = true;
    }
});


equalBtn.addEventListener('click', () => {
    console.log("equal");
    console.log(currentOp);
    if(currentOp==undefined){
        currentOp = add;
        prevOp = currentOp;
    }
    if(bReset==true&&prevBtn!="equal"){
        displayVar="0";
        bReset = false;
    }
    if(prevBtn == "equal"){
        numA = Number(displayVar);
        if(currentOp!=multiply && currentOp!=divide){
            numB = 0;
        }else{
            numB = 1;
        }
        
        bReset = true;
        bSwitch = true;
    }else{
        numB = Number(displayVar);
    }
    prevBtn = "equal";

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

