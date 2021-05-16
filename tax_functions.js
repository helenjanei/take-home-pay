 const $ = function (id) {
    return document.getElementById(id);
}

const calculateTakeHome = function() {
    let total;
    let income = parseFloat( $("income").value );
    $("tax").value =  calcTax(income);
    $("ni").value =  calcNi(income);
    $("net").value =  calcNet(income);

    function calcTax(amount){
    let calculate = 0;
    if(amount < 15000){
        tax = 0;
    }
    else if(amount < 50000){
    tax = (amount - 15000) * .20;
    }
    else {
    tax = 7000 + ((amount - 50000) * .40);
    }
    return parseFloat(tax.toFixed(2));
   
}
}

window.onload = function () {
    $("calculate").onclick = calculateTakeHome;
}

