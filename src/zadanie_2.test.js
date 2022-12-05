import {getPercents}  from "./zadanie_2";

describe("returning a percentage of the number", () => {
  it("should return percentage", () => {
    expect(getPercents(60, 200)).toBe(console.log(120));
  });
  it("returns an error", () => {
    expect(getPercents("ddd", 100)).toBe(console.log("Введите число"));
  });
  it("returns an error", () => {
    expect(getPercents(-10, 100)).toBe(console.log("Введите число больше 0"));
  });
});