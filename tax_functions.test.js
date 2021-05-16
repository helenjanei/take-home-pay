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


describe('calcTax function', () => {

  test('returns a total of 0 when salary is below 15000', () => {
     expect(calcTax(14000)).toEqual(0.00)
    expect(calcTax(12540.89)).toEqual(0.00)
    expect(calcTax(0)).toEqual(0.00)
  })
test('returns correct tax when salary is between 15000 and 50000', () => {
    expect(calcTax(20000)).toEqual(1000)
  expect(calcTax(17000.54)).toEqual(400.11)
    expect(calcTax(35000)).toEqual(4000)
  })
test('returns correct tax when salary is above 50000', () => {
   expect(calcTax(55000)).toEqual(9000)
  expect(calcTax(67000)).toEqual(13800)
    expect(calcTax(109000.12)).toEqual(30600.05)
    expect(calcTax(473000)).toEqual(176200)
  })
})



describe('calcNi function', () => {
  test('returns a total of 0 when salary is below 15000', () => {
    expect(calcNi(14000)).toEqual(0)
    expect(calcNi(12000.53)).toEqual(0)
    expect(calcNi(0)).toEqual(0)
  })
test('returns correct National Insurance when salary is Equaltween 15000 and 50000', () => {
    expect(calcNi(20000)).toEqual(600)
  expect(calcNi(17000.76)).toEqual(240.09)
    expect(calcNi(35000)).toEqual(2400)
  })
test('returns correct National Insurance when salary is above 50000', () => {
    expect(calcNi(55000)).toEqual(4300)
  expect(calcNi(67000)).toEqual(4540)
    expect(calcNi(109000.98)).toEqual(5380.02)
    expect(calcNi(473000)).toEqual(12660)
  })

})