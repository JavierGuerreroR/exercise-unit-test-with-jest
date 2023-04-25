test("One euro should be 1.206 dollars", function () {
    // import app.js function
    const { fromEuroToDollar } = require('./app.js')

    // expected result = test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro equals 1.2 dollars, given 3.5 euros = (3.5 * 1.2)
})

test("One dollar should be 108 yen", function () {
    const { fromDollarToYen } = require('./app.js');
  
    // expected result = test with yen
    expect(fromDollarToYen(1)).toBeCloseTo(106.58, 1); // 1 dollar must be 108 yen
  });
  

test("One yen should be 0.0063 pounds", function () {
    const { fromYenToPound } = require('./app.js');
  
    // expected result = test with pounds
    expect(fromYenToPound(1)).toBeCloseTo(0.0062549, 4); // 1 yen must be 0.0063 pounds 
  });