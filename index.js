let billAmountEl = document.getElementById('billAmount');
let percentageTipEl = document.getElementById('percentageTip');
let tipAmountEl = document.getElementById('tipAmount');
let totalAmountEl = document.getElementById('totalAmount');
let errorMessageEl = document.getElementById('errorMessage');
let errorMessage = 'Please Enter a valid Input.'
function calculateTip(){
    let billAmountValue = billAmountEl.value;
    let percentageTipValue = percentageTipEl.value;
    if (billAmountValue === ''){
        errorMessageEl.textContent = errorMessage;
    }
    else if (percentageTipValue === ''){
        errorMessageEl.textContent = errorMessage;
    }
    else{
        errorMessageEl.textContent = '';
        let billAmount = parseInt(billAmountValue);
        let percentageTip = parseInt(percentageTipValue);
        let calculateTip = (percentageTip/100)*billAmount;
        let calculateTotal = billAmount + calculateTip;
        tipAmountEl.value = calculateTip;
        totalAmountEl.value = calculateTotal;

    }
}