// function to change the amount value at the initial bill section
let amount = document.querySelector("#amount");
let input;

amount.addEventListener("click", function () {
  amount.contentEditable = true;
  amount.focus();
});

amount.addEventListener("blur", function () {
  amount.contentEditable = false;
});

amount.addEventListener("input", function () {
  // Validate input value using regex for integer
  let value = amount.innerText.trim();
  let intValue = parseInt(value);
  if (isNaN(intValue)) {
    amount.innerText = "";
  } else {
    input = intValue;
  }
});





// function to calculate the tip amount from the given input by the user 

// for 5% tip calculation
let tipgenerated;
let t5= document.getElementById("tip1");
let tA5= document.getElementById("tipAmount");

t5.addEventListener("click",function(){
    let bill = parseFloat(input);
    tipgenerated =(bill*(0.05)).toFixed(2);
    tA5.innerText= tipgenerated;
})

// for 10% tip calculation 
let t10= document.getElementById("tip2");
let tA10= document.getElementById("tipAmount");

t10.addEventListener("click",function(){
    let bill = parseFloat(input);
    tipgenerated=(bill*(0.10)).toFixed(2);
    tA10.innerText= tipgenerated;
})

// for 15% tip calculation 
let t15= document.getElementById("tip3");
let tA15= document.getElementById("tipAmount");

t15.addEventListener("click",function(){
    let bill = parseFloat(input);
    tipgenerated=(bill*(0.15)).toFixed(2);
    tA15.innerText= tipgenerated;
})
// for 25% tip calculation 
let t25=document.getElementById("tip4");
let tA25= document.getElementById("tipAmount");

t25.addEventListener("click",function(){
    let bill = parseFloat(input);
    tipgenerated=(bill*(0.25)).toFixed(2);
    tA25.innerText= tipgenerated;
})
// for 50% tip calculation 
let t50= document.getElementById("tip5");
let tA50= document.getElementById("tipAmount");

t50.addEventListener("click",function(){
    let bill = parseFloat(input);
    tipgenerated=(bill*(0.50)).toFixed(2);
    tA50.innerText= tipgenerated;
})
// for 75% tip calculation 
let t75= document.getElementById("tip6");
let tA75= document.getElementById("tipAmount");

t75.addEventListener("click",function(){
    let bill = parseFloat(input);
    tipgenerated=(bill*(0.75)).toFixed(2);
    tA75.innerText= tipgenerated;
})




// function for adding number of people for spliting the bill
let elements = document.querySelectorAll("#add, #small2");
let sub = document.querySelector("#sub");
let num = document.querySelector("#num");
let currentNum;
add.addEventListener("click", function () {
  let currentValue = parseInt(num.innerText);
  let newValue = currentValue + 1;
  num.innerText = newValue;
  currentNum = parseFloat(newValue);
});

sub.addEventListener("click", function () {
  let currentValue = parseInt(num.innerText);
  let newValue = currentValue - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  num.innerText = newValue;
  currentNum = parseFloat(newValue);
});

// add generate bill button functionality in generate button 
let generateBox = document.getElementById("generateBox");
let totalAmt = document.getElementById("totalAmt");
let genTamt;
let perPersonBill = document.getElementById("perPersonBill");

generateBox.addEventListener("click",function(){
  genTamt = (parseFloat(tipgenerated) + parseFloat(input)).toFixed(2);
  totalAmt.innerText= genTamt;
  let divAmt= (parseFloat(genTamt)/parseFloat(currentNum)).toFixed(2);
  perPersonBill.innerText=divAmt;

});

// function to reset every changes made in the values :
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
  amount.innerText = "";
  tA5.innerText = "0.00";
  tA10.innerText = "0.00";
  tA15.innerText = "0.00";
  tA25.innerText = "0.00";
  tA50.innerText = "0.00";
  tA75.innerText = "0.00";
  num.innerText = "0";
  totalAmt.innerText = "0.00";
  perPersonBill.innerText = "0.00";
  amount.contentEditable = false;
  tipgenerated = 0;
  genTamt = 0;
  currentNum = 0;
});
