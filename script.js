const nums = document.querySelectorAll(".num");
console.log(nums);
const op = document.querySelectorAll(".operator");
console.log(op);
const equal = document.querySelector(".equals");
console.log(equal);
const displayVal = document.querySelector(".displayVal");
const cV = document.querySelector(".currentVal");
let operator, prevVal, currentVal, displayContent;

prevVal = 0;
currentVal = 0;
operator = "";

function updateNumber(n) {
    if (currentVal != '0' && currentVal != operator)
        currentVal += n;
    else
        currentVal = n;

    updateDisplay(n);

}
function updateOperator(op) {
    if ((prevVal != 0) && (currentVal != 0)) {
        currentVal = (calculator(prevVal, currentVal, operator));
        console.log(currentVal);
    }
    prevVal = currentVal;
    operator = op;
    currentVal = op;
    updateDisplay(op);
}
function updateDisplay(n) {
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
function calculator(num1, num2, action) {
    let r = 0;
    switch (action) {

        case '+':
            r = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            r = parseInt(num1) - parseInt(num2);
            break;
        case 'X':
            r = parseInt(num1) * parseInt(num2);
            break;
        case '/':
            r = parseInt(num1) / parseInt(num2);
            break;


    }
    return r;
}
equal.addEventListener("click", function () {
    let r = (calculator(prevVal, currentVal, operator));
    cV.textContent = r;

});
