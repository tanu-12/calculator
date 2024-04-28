const nums = document.querySelectorAll(".num");
console.log(nums);
const op = document.querySelectorAll(".operator");
console.log(op);
const equal = document.querySelector(".equals");
console.log(equal);
const displayVal = document.querySelector(".displayVal");
const cV = document.querySelector(".currentVal");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const backSpace = document.querySelector(".backSpace");
let operator, prevVal, currentVal, displayContent;

prevVal = 0;
currentVal = 0;
operator = "";

clear.addEventListener("click", () => {

    prevVal = 0;
    currentVal = "";
    operator = "";
    displayVal.textContent = "      ";
    cV.textContent = "    ";


});

function updateNumber(n) {
    if (currentVal != '0' && currentVal != operator)
        currentVal += n;
    else
        currentVal = n;

    updateDisplay(n);

}
function updateOperator(op) {
    if ((prevVal != 0) && (currentVal != 0)) {
        currentVal = (operate(prevVal, currentVal, operator));
        console.log(currentVal);
    }
    prevVal = currentVal;
    operator = op;
    currentVal = op;
    updateDisplay(op);
}
function updateDisplay(n) {
    if (displayVal.textContent === "") {
        displayVal.textContent = n;
    }
    displayVal.textContent += n;
    cV.textContent = currentVal;

}

nums.forEach((item) => {
    item.addEventListener("click", function (e) {
        console.log("number was clicked!!!!");

        updateNumber(e.target.textContent);
    });
});
op.forEach((items) => {
    items.addEventListener("click", function (e) {

        console.log("you clicked an operator!!");
        updateOperator(e.target.textContent);
    });


});

function multiply(n1, n2) {

    let m = (parseFloat(n1) * parseFloat(n2));
    console.log(m);
    return roundUp(m);


}


function divide(n1, n2) {
    if (n2 == 0) {
        displayVal.textContent = "Cannot divide with 0";
        // cV.textContent = "Cannot divide with 0";
        return "Cannot divide with 0";
    }

    let d = (parseFloat(n1) / parseFloat(n2));
    return roundUp(d);


}
function operate(num1, num2, action) {
    let r = 0;
    switch (action) {

        case '+':
            r = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            r = parseFloat(num1) - parseFloat(num2);
            break;
        case 'X':
            r = multiply(num1, num2);
            break;
        case '/':
            r = divide(num1, num2);
            break;


    }
    return r;
}
dot.addEventListener("click", function (e) {
    console.log("dot clickedd");
    if (currentVal.includes(".")) {
        return;
    }
    else
        currentVal += e.target.textContent;
    updateDisplay(e.target.textContent);

})
function roundUp(n) {
    let number = n.toString();
    if (number.includes(".")) {
        let decimalN = n.toString().split('.')[1].length;

        if (decimalN < 10)
            return n;
        else
            return Math.round(n);

    }
    return n;
}
equal.addEventListener("click", function () {
    let r = (operate(prevVal, currentVal, operator));
    cV.textContent = r;

});
backSpace.addEventListener("click", function () {
    console.log("clicked back space");
    if (currentVal != '0' && currentVal != operator) {
        currentVal = currentVal.slice(0, -1);
        displayVal.textContent = displayVal.textContent.slice(0, -1);
        cV.textContent = currentVal;
    }
    else return;



});