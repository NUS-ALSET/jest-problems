import Vue from "vue";
import App from "./main";

describe("Vue tests", () => {

  it("should have correct greeting", () => {
    expect(App.greeting).toBe("Hello");
  });

});

