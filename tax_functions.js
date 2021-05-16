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

function calcNi(amount){
    let calculate = 0;
    if(amount < 15000){

        ni = 0;

    }
    else if( amount < 50000){
    ni = (amount - 15000) * .12;    
    }
    else{
    upperNi = (amount - 50000) * .02
    ni = 4200 + upperNi;
    }
 
    return parseFloat(ni.toFixed(2));
    
}


function calcNet(amount, tax, ni){

    return parseFloat((amount - (tax + ni)).toFixed(2));
}

}

window.onload = function () {
    $("calculate").onclick = calculateTakeHome;
}

