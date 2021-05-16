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


describe('calcTax function', () => {

  test('returns a total of 0 when salary is below 15000', () => {
     expect(calcTax(14000)).toEqual(0.00)
    expect(calcTax(12540.89)).toEqual(0.00)
    expect(calcTax(0)).toEqual(0.00)
  })
test('returns correct tax when salary is Equaltween 15000 and 50000', () => {
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