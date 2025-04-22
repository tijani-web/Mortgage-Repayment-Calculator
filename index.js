const form = document.getElementById("form")
const clear = document.getElementById("clear").addEventListener("click", function() {
    form.clear();
})

const btn = document.getElementById("btn")
btn.addEventListener("click", function (event) {
    event.preventDefault();
 const amount = document.getElementById("mortgageAmount");
const term = document.getElementById("mortgageTerm");
const rate = document.getElementById("mortgageRate");
const errors = document.querySelectorAll(".error");
const box = document.getElementById("box")

// Hide all errors first
errors.forEach(e => e.style.display = "none");

let hasError = false;

if (amount.value.trim() === '' ) {
    errors[0].style.display = "block";
    // box.style.height = "600px"
    box.style.paddingBottom = "4rem"
    hasError = true;
}
if (term.value.trim() === '') {
    errors[1].style.display = "block";
    // box.style.height = "600px"

    hasError = true;
}
if (rate.value.trim() === '') {
    errors[2].style.display = "block";
    // box.style.height = "600px" 
    hasError = true;
}else{
    box.style.paddingBottom = "0"
}

if (hasError) return;

    let mortgageAmount = parseFloat(document.getElementById("mortgageAmount").value);
    let mortgageTerm = parseFloat(document.getElementById("mortgageTerm").value);
    let mortgageRate = parseFloat(document.getElementById("mortgageRate").value);
    
    const p = mortgageAmount;
    const r = mortgageRate/100/12;
    const t = mortgageTerm * 12;
    let monthlyPayment = p * (r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    let resultInfo = document.getElementById("resultInfo")
    let finalResult = document.getElementById("finalResult")
    resultInfo.style.display = "none"
    finalResult.style.display = "block"
    const monthlyAmount = document.getElementById("monthlyAmount");
    const termAmount = document.getElementById("termAmount");
    monthlyAmount.innerHTML = `€${monthlyPayment.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    termAmount.innerHTML = `€${(monthlyPayment * t).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
})