const $ = function (id) {
  return document.getElementById(id);
};

const calculateTakeHome = function () {
  let total;
  let grossPay = parseFloat($("grossPay").value);
  $("tax").value = calcTax(grossPay);
  $("nationalInsurance").value = calcNationalInsurance(grossPay);
  $("takeHomePay").value = calcTakeHomePay(grossPay);

  try {
    if (grossPay === "") throw "empty"; // not catching empty input - not sure why
    if (isNaN(grossPay)) throw "not a number";
  } catch (err) {
    alert("Input is " + err);
  }

  function calcTax(grossPay) {
    if (grossPay < 15000) {
      tax = 0;
    } else if (grossPay < 50000) {
      tax = (grossPay - 15000) * 0.2;
    } else {
      tax = 7000 + (grossPay - 50000) * 0.4;
    }
    return parseFloat(tax.toFixed(2));
  }

  function calcNationalInsurance(grossPay) {
    if (grossPay < 15000) {
      nationalInsurance = 0;
    } else if (grossPay < 50000) {
      nationalInsurance = (grossPay - 15000) * 0.12;
    } else {
      upperNationalInsurance = (grossPay - 50000) * 0.02;
      nationalInsurance = 4200 + upperNationalInsurance;
    }
    return parseFloat(nationalInsurance.toFixed(2));
  }

  function calcTakeHomePay(grossPay) {
    let takeHomePay = grossPay - (tax + nationalInsurance);
    return parseFloat(takeHomePay.toFixed(2));
  }
};

window.onload = function () {
  $("calculate").onclick = calculateTakeHome;
};
