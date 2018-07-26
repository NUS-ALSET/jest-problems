import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  it("should have function subtract", () => {
    expect(typeof App.subtract).toBe("function");
  });

  it("should return subtract", () => {
    expect(App.subtract(3, 2)).toBe(1);
  });

  it("should return subtract", () => {
    expect(App.subtract(4, 2)).toBe(2);
  });
  // Mount an instance and inspect the render output

});

