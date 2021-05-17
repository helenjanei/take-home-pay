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


describe('calcNet function', () => {
  test('returns a total the same as salary when salary is Equallow 15000', () => {
     expect(calcNet(14000, 0, 0)).toEqual(14000)
    expect(calcNet(12000.12, 0, 0)).toEqual(12000.12)
    expect(calcNet(0, 0, 0)).toEqual(0)
  })
test('returns correct net pay when salary is Equaltween 15000 and 50000', () => {
   expect(calcNet(20000, 1000, 600)).toEqual(18400)
  expect(calcNet(17000.87, 400.17, 240.10)).toEqual(16360.6)
    expect(calcNet(35000, 4000, 2400)).toEqual(28600)
  })
test('returns correct net pay when salary is above 50000', () => {
    expect(calcNet(55000, 9000, 4300)).toEqual(41700)
  expect(calcNet(67000.89, 13800.36, 4540.02)).toEqual(48660.51)
    expect(calcNet(109000, 30600, 5380)).toEqual(73020)
    expect(calcNet(473000, 176200, 12660)).toEqual(284140)
  })
})