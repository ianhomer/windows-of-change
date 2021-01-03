import { travel } from "../../src/utils/journeyish";

const journey = ["step1", "step2", "step3"];

it("travels nowhere", () => {
  expect(travel(journey, "step1", 0)).toBe("step1");
});

it("travels forward", () => {
  expect(travel(journey, "step2", 1)).toBe("step3");
});

it("travels backward", () => {
  expect(travel(journey, "step2", -1)).toBe("step1");
});

it("travels forward to end", () => {
  expect(travel(journey, "step3", 1)).toBe("step3");
});

it("travels backward to beginning", () => {
  expect(travel(journey, "step1", -1)).toBe("step1");
});

it("travels forward from nowhere", () => {
  expect(travel(journey, "nowhere", 1)).toBe("step3");
});

it("travels backward from nowhere beginning", () => {
  expect(travel(journey, "nowhere", -1)).toBe("step1");
});