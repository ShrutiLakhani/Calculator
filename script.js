const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const outputVal = document.querySelector(".output");
const btnAdd = document.querySelector(".btn-add");
const btnSub = document.querySelector(".btn-sub");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");

btnAdd.addEventListener("click", function()
{  
  const sum = Number(num1.value) + Number(num2.value);
  outputVal.textContent = sum;
})
btnSub.addEventListener("click", function()
{  
  const diff = Number(num1.value) - Number(num2.value);
  outputVal.textContent = diff;
})
btnMul.addEventListener("click", function()
{  
  const mul = Number(num1.value) * Number(num2.value);
  outputVal.textContent = mul;
})
btnDiv.addEventListener("click", function()
{  
  const div = Number(num1.value) / Number(num2.value);
  outputVal.textContent = div;
})

