let monthlyAmount;
let totalAmount = 0;
let yearlyInterest;
let yearlyIncrease;
let main = document.querySelector(".main");
let list = document.querySelector("#list");

function formatNumber(number) {
  const formattedNumber = new Intl.NumberFormat("en-IN").format(number);
  return formattedNumber;
}

function calculate() {
  list.innerHTML = "";
  
  totalAmount = 0;
  monthlyAmount = Number(document.querySelector(".Monthly_Amount").value);
  yearlyInterest = Number(document.querySelector(".Intrest_rate").value);
  yearlyIncrease = Number(document.querySelector(".Yearly_increament").value);
  if( !monthlyAmount && !yearlyIncrease && !yearlyInterest){
    alert("Bhai kuch value to enter krde...");
    return;
  }


  for (let i = 1; i <= 50; i++) {
    totalAmount = totalAmount + monthlyAmount * 12 * Math.pow(1 + yearlyInterest / 100, i);
    monthlyAmount *= 1 + yearlyIncrease / 100;
    let li = document.createElement("li");
    li.innerHTML = `Total Amount after ${i} years: ₹  <span class="paisa">${formatNumber(Math.round(totalAmount))} </span`;
    list.appendChild(li);
  }
}
