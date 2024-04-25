const nums = document.querySelectorAll(".num");
console.log(nums);
const op = document.querySelectorAll(".operator");
console.log(op);
const equal = document.querySelector(".equals");
console.log(equal);
const displayVal = document.querySelector(".displayVal");
const cV = document.querySelector(".currentVal");
let operator, prevVal, currentVal;

prevVal = 0;
currentVal = 0;
operator = "";
function updateNumber(n) {
    currentVal = n;
    updateDisplay();

}
function updateOperator(op) {
    prevVal = currentVal;
    operator = op;
    currentVal = op;
    updateDisplay();
}
function updateDisplay() {
    displayVal.textContent += currentVal;
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
    switch (action) {

        case '+':
            return parseInt(num1) + parseInt(num2);
        case '-':
            return parseInt(num1) - parseInt(num2);
        case 'x':
            return parseInt(num1) * parseInt(num2);
        case '/':
            return parseInt(num1) / parseInt(num2);


    }


}
