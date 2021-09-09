const $ = function (id) {
  return document.getElementById(id);
};

const calculateTakeHome = function () {
  let total;
  let grossPay = parseFloat($("grossPay").value);
  $("tax").value = calcTax(grossPay);
  $("nationalInsurance").value = calcNationalInsurance(grossPay);
  $("net").value = calcNet(grossPay);

  function calcTax(grossPay) {
    let calculate = 0;
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
    let calculate = 0;
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

  function calcNet(grossPay) {
    let calculate = 0;
    let net = grossPay - (tax + nationalInsurance);
    return parseFloat(net.toFixed(2));
  }
};

window.onload = function () {
  $("calculate").onclick = calculateTakeHome;
};
