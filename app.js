
const btnCalculate = document.getElementById('submit');

const btnReset = document.getElementById('reset');

let totalAfterTip = document.getElementById('total');

let bill = document.getElementById('bill');

let errorMessage =  document.createElement('p');

let choiceesToTip =  document.getElementById('val')

errorMessage.style.color = 'red';

btnCalculate.addEventListener('click', () => {
   let billValue = bill.value;

   if(isNaN(billValue) || billValue <= 0) {
       errorMessage.textContent = 'Please enter a valid bill amount';
       bill.insertAdjacentElement('afterend', errorMessage);
   }
   else{

    errorMessage.textContent = '';
    let billValue = parseFloat(bill.value);
    let radios = document.querySelectorAll('input[name="tip"]');
    let selected = false;
    for(let radio of radios)
    {
        if (radio.checked) { 
            selected = true;
            if (radio.value === "nu") {
                totalAfterTip.value = billValue;
            }
            if(radio.value === "5"){
                totalAfterTip.value = (billValue * 1.05).toFixed(2);
            }
            if (radio.value === "10") {
                totalAfterTip.value = (billValue * 1.1).toFixed(2);
            }
            if(radio.value === "15"){
                totalAfterTip.value = (billValue * 1.15).toFixed(2);
            }
            if(radio.value === "20")
            {
                let otherSum = document.getElementById('othersum');
                if(isNaN(otherSum.value) || otherSum.value <= 0) {
                    errorMessage.textContent = 'Please enter a valid amount';
                    otherSum.insertAdjacentElement('afterend', errorMessage);
                }
                else{
                    errorMessage.textContent = '';
                    let otherSumValue =  Number(otherSum.value);
                    let selectedChoice = choiceesToTip.value;
                    if (selectedChoice === "%") {
                        totalAfterTip.value = (billValue * (1 + (otherSumValue / 100))).toFixed(2);
                    } else {
                        totalAfterTip.value = (billValue + otherSumValue).toFixed(2);
                    }
                }
            }
           
        }
    }
    if (!selected) {
        errorMessage.textContent = 'Please select a tip percentage';
        radios[radios.length].parentElement.appendChild(errorMessage); 
    }


   }
});

btnReset.addEventListener('click',()=>{
    bill.value ='';
    totalAfterTip.value='';
    let radios = document.querySelectorAll('input[name="tip"]');
    for(radio of radios){
        radio.checked = false;
    }
    let otherSum = document.getElementById('othersum');
    otherSum.value = '';
});