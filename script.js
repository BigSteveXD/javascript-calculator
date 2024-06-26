let displayVar = "0";
let currentOp;
let prevOp;
let numA = 0;
let numB = 0;
let prevBtn = "";
let lastBtn = "";
let switchNum = false;
let resetDisplay = false;

function add(a, b){
    return Math.round((((a + b)+ Number.EPSILON) * 100) / 100);
}
function subtract(a, b){
    return Math.round((((a - b)+ Number.EPSILON) * 100) / 100);
}
function multiply(a, b){
    return Math.round((((a * b)+ Number.EPSILON) * 100) / 100);
}
function divide(a, b){
    return Math.round((((a / b)+ Number.EPSILON) * 100) / 100);
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
    if(prevBtn==="equal"){//assumes this button is only hit when A and B are filled
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"0"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        //displayVar = "0";//do nothing
    }else{
        displayVar = displayVar + "0";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
oneBtn.addEventListener('click', () => {
    console.log("oneBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"1"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar = "1";
    }else{
        displayVar = displayVar + "1";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
twoBtn.addEventListener('click', () => {
    console.log("twoBtn");
    if(prevBtn=="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"2"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="2";
    }else{
        displayVar = displayVar + "2";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
    
    console.log("REMOVE: switchNum:" + switchNum);//
});
threeBtn.addEventListener('click', () => {
    console.log("threeBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"3"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="3";
    }else{
        displayVar = displayVar + "3";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
fourBtn.addEventListener('click', () => {
    console.log("fourBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"4"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="4";
    }else{
        displayVar = displayVar + "4";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
fiveBtn.addEventListener('click', () => {
    console.log("fiveBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"5"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="5";
    }else{
        displayVar = displayVar + "5";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
sixBtn.addEventListener('click', () => {
    console.log("sixBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"6"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="6";
    }else{
        displayVar = displayVar + "6";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
sevenBtn.addEventListener('click', () => {
    console.log("sevenBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"7"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="7";
    }else{
        displayVar = displayVar + "7";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
eightBtn.addEventListener('click', () => {
    console.log("eightBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"8"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="8";
    }else{
        displayVar = displayVar + "8";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
nineBtn.addEventListener('click', () => {
    console.log("nineBtn");
    if(prevBtn==="equal"){
        resetDisplay=true;
        switchNum = false;
    }
    if(prevBtn!=="number"){
        lastBtn = prevBtn;
        prevBtn = "number";//"9"
    }
    if(resetDisplay===true){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar==="0"){
        displayVar="9";
    }else{
        displayVar = displayVar + "9";
    }
    display.textContent = displayVar;
    console.log("number " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});


addBtn.addEventListener('click', () => {
    console.log("add");
    if(currentOp===undefined){
        currentOp = add;
        prevOp = currentOp;
    }else{
        prevOp = currentOp;
        currentOp = add;
    }
    if(switchNum===false){
        numA = Number(displayVar);
        resetDisplay = true;
        switchNum = true;
    }else if((lastBtn!==prevBtn) && (lastBtn==="add" || lastBtn==="subtract" || lastBtn==="multiply" || lastBtn==="divide") && (prevBtn==="number")){//if(lastBtn == Op and prevBtn == number)
        console.log("special");
        console.log("before prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        numB = Number(displayVar);
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;

        numA = Number(displayVar);
        switchNum = true;
        resetDisplay = true;
        console.log("after prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        console.log("special");
    }else {//if(switchNum===true)
        numB = Number(displayVar);
        //numA = operate(prevOp, numA, numB);//used to be here
        numB = 0;//was disabled//?
        displayVar = numA;
        display.textContent = displayVar;
        resetDisplay = true;
    }
    if(prevBtn.localeCompare("equal")===0){
        if(displayVar.localeCompare("Can't divide by zero")!==0){
            numA = Number(displayVar);
            switchNum = true;
        }
    }
    if(prevBtn==="add"){
        numB = numA;
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        //switchNum = false;
        numA = displayVar;
        switchNum = true;
    }
    if(prevBtn==="subtract" || prevBtn==="multiply" || prevBtn==="divide"){//added
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        numA = displayVar;
        switchNum = true;
    }
    lastBtn = prevBtn;
    prevBtn = "add";
    console.log("add " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
subtractBtn.addEventListener('click', () => {
    console.log("subtract");
    if(currentOp===undefined){
        currentOp = subtract;
        prevOp = currentOp;
    }else{
        prevOp = currentOp;
        currentOp = subtract;
    }
    if(switchNum===false){
        numA = Number(displayVar);
        resetDisplay = true;
        switchNum = true;
    }else if((lastBtn!==prevBtn) && (lastBtn==="add" || lastBtn==="subtract" || lastBtn==="multiply" || lastBtn==="divide") && (prevBtn==="number")){//if(lastBtn == Op and prevBtn == number)
        console.log("special");
        console.log("before prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        numB = Number(displayVar);
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;

        numA = Number(displayVar);
        switchNum = true;
        resetDisplay = true;
        console.log("after prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        console.log("special");
    }else {//if(switchNum===true)
        numB = Number(displayVar);
        //numA = operate(prevOp, numA, numB);//used to be here
        numB = 0;
        displayVar = numA;
        display.textContent = displayVar;
        resetDisplay = true;
    }
    if(prevBtn.localeCompare("equal")===0){
        if(displayVar.localeCompare("Can't divide by zero")!==0){
            numA = Number(displayVar);
            switchNum = true;
        }
    }
    if(prevBtn==="subtract"){
        numB = numA;
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        //switchNum = false;
        numA = displayVar;
        switchNum = true;
    }
    if(prevBtn==="add" || prevBtn==="multiply" || prevBtn==="divide"){//added
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        numA = displayVar;
        switchNum = true;
    }
    lastBtn = prevBtn;
    prevBtn = "subtract";
    console.log("subtract " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
multiplyBtn.addEventListener('click', () => {
    console.log("multiply");
    if(currentOp===undefined){
        currentOp = multiply;
        prevOp = currentOp;
    }else{
        prevOp = currentOp;
        currentOp = multiply;
    }
    if(switchNum===false){
        numA = Number(displayVar);
        resetDisplay = true;
        switchNum = true;
    }else if((lastBtn!==prevBtn) && (lastBtn==="add" || lastBtn==="subtract" || lastBtn==="multiply" || lastBtn==="divide") && (prevBtn==="number")){//if(lastBtn == Op and prevBtn == number)
        console.log("special");
        console.log("before prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        numB = Number(displayVar);
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;

        numA = Number(displayVar);
        switchNum = true;
        resetDisplay = true;
        console.log("after prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        console.log("special");
    }else {//if(switchNum===true)
        numB = Number(displayVar);
        //numA = operate(prevOp, numA, numB);//used to be here
        numB = 0;
        displayVar = numA;
        display.textContent = displayVar;
        resetDisplay = true;
    }
    if(prevBtn.localeCompare("equal")===0){
        if(displayVar.localeCompare("Can't divide by zero")!==0){
            numA = Number(displayVar);
            switchNum = true;
        }
    }
    if(prevBtn==="multiply"){
        numB = numA;
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        //switchNum = false;
        numA = displayVar;
        switchNum = true;
    }
    if(prevBtn==="add" || prevBtn==="subtract" || prevBtn==="divide"){//added
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        numA = displayVar;
        switchNum = true;
    }
    lastBtn = prevBtn;
    prevBtn = "multiply";
    console.log("multiply " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
divideBtn.addEventListener('click', () => {
    console.log("divide");
    if(currentOp===undefined){
        currentOp = divide;
        prevOp = currentOp;
    }else{
        prevOp = currentOp;
        currentOp = divide;
    }
    if(switchNum===false){
        numA = Number(displayVar);
        resetDisplay = true;
        switchNum = true;
    }else if((lastBtn!==prevBtn) && (lastBtn==="add" || lastBtn==="subtract" || lastBtn==="multiply" || lastBtn==="divide") && (prevBtn==="number")){//if(lastBtn == Op and prevBtn == number)
        console.log("special");
        console.log("before prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        numB = Number(displayVar);
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;

        numA = Number(displayVar);
        switchNum = true;
        resetDisplay = true;
        console.log("after prevOp:" + prevOp + " numA:" + numA + " numB:" + numB);
        console.log("special");
    }else {//if(switchNum===true)
        numB = Number(displayVar);
        //numA = operate(prevOp, numA, numB);//used to be here
        numB = 0;
        displayVar = numA;
        display.textContent = displayVar;
        resetDisplay = true;
    }
    if(prevBtn.localeCompare("equal")===0){
        if(displayVar.localeCompare("Can't divide by zero")!==0){
            numA = Number(displayVar);
            switchNum = true;
        }
    }
    if(prevBtn==="divide"){
        numB = numA;
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        //switchNum = false;
        numA = displayVar;
        switchNum = true;
    }
    if(prevBtn==="add" || prevBtn==="subtract" || prevBtn==="multiply"){//added
        displayVar = operate(prevOp, numA, numB);
        display.textContent = displayVar;
        numA = displayVar;
        //numA = Number(displayVar);//?
        switchNum = true;
    }
    lastBtn = prevBtn;
    prevBtn = "divide";
    console.log("divide " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});


equalBtn.addEventListener('click', () => {
    console.log("equal");
    if(currentOp===undefined){
        currentOp = add;
        prevOp = currentOp;
    }
    if(resetDisplay===true && prevBtn!=="equal"){
        displayVar="0";
        resetDisplay = false;
    }
    if(displayVar.localeCompare("Can't divide by zero")===0){
        console.log("display reset");
        numB = 0;
        displayVar = "0";
    }
    switchNum = false;
    if(prevBtn==="add" || prevBtn==="subtract" || prevBtn==="multiply" || prevBtn==="divide"){
        resetDisplay = true;//?
    }
    if(prevBtn==="equal"){
        displayVar = Math.round((((Number(displayVar))+ Number.EPSILON) * 100) / 100).toString();
        numA = Number(displayVar);
        if(currentOp!==multiply && currentOp!==divide){
            numB = 0;
        }else{
            numB = 1;
        }
        resetDisplay = true;
        switchNum = true;
    }else{
        displayVar = Math.round((((Number(displayVar))+ Number.EPSILON) * 100) / 100).toString();
        display.textContent = displayVar;
        numB = Number(displayVar);
    }
    if(numB===0 && currentOp===divide){
        console.log("Can't divide by zero");
        displayVar = "Can't divide by zero";
    }else{
        console.log(operate(currentOp, numA, numB));
        displayVar = operate(currentOp, numA, numB).toString();
        displayVar = Math.round((((Number(displayVar))+ Number.EPSILON) * 100) / 100).toString();
    }
    lastBtn = prevBtn;
    prevBtn = "equal";
    display.textContent = displayVar;
    console.log("equal " + "numA:" + numA + "\ncurrentOp:" + currentOp.toString() + "\nnumB:" + numB + " displayVar:" + displayVar + "\nprevOp:" + prevOp.toString() + "\nprevBtn:" + prevBtn);
});
clearBtn.addEventListener('click', () => {
    console.log("clear");
    displayVar = "0";
    numA = 0;
    numB = 0;
    display.textContent = displayVar;
    lastBtn = prevBtn;
    prevBtn = "clear";
});

