import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  it("should have function type", () => {
    expect(typeof App.add).toBe("function");
  });

  it("should return 5", () => {
    expect(App.add(2, 3)).toBe(5);
  });

  // Mount an instance and inspect the render output
  it("renders the correct html", () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    //expect(vm.$el.textContent).toBe('bye!')
  });
});

