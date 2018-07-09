let calc = require("./index");

describe("Adder", () => {
  it("knows that adder adds two numbers ", () => {
    //expect(greetings.hello()).toBe("HELLO");
    expect(calc.add(2, 2)).toBe(4);
  });
});
