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
    displayVal.textContent += currentVal;
    cV.textContent = currentVal;
}

nums.forEach((item) => {
    item.addEventListener("click", function (e) {
        console.log("number was clicked!!!!");
        updateNumber(e.target.textContent);



    });
});

