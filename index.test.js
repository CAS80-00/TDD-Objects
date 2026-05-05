import { describe, it, expect } from "vitest";

import {
  getCohort,
  sortStudents,
  makeFlag,
  increment,
  getTaxicabDistance,
  getHerbivores,
  getCarnivoreNames,
  getTotalCost,
  zip,
  countCharacters,
} from "./index.js";

describe("getCohort", function () {
  it("returns the cohort of a student", function () {
    expect(getCohort({ cohort: 2012, name: "Alice" })).toBe(2012);
  });
  it("works with negative cohort numbers", function () {
    expect(getCohort({ cohort: -1, name: "Bob" })).toBe(-1);
  });
  it("works when cohort is 0", function () {
    expect(getCohort({ cohort: 0, name: "Charlie" })).toBe(0);
  });
});

describe("sortStudents", function () {
  it("returns the student whose name comes first alphabetically", function () {
    const studentA = { cohort: 1, name: "Alice" };
    const studentB = { cohort: 1, name: "Bob" };
    expect(sortStudents(studentA, studentB)).toEqual(studentA);
  });
  it("returns studentA if names are equal", function () {
    const studentA = { cohort: 2, name: "Charlie" };
    const studentB = { cohort: 3, name: "Charlie" };
    expect(sortStudents(studentA, studentB)).toBe(studentA);
  });
  it("returns student with empty name", function () {
    const studentA = { cohort: 2, name: "Dami" };
    const studentB = { cohort: 3, name: "" };
    expect(sortStudents(studentA, studentB)).toBe(studentB);
  });
  it("handles case sensitivity", function () {
    const studentA = { cohort: 1, name: "ekun" };
    const studentB = { cohort: 1, name: "Ekun" };
    expect(sortStudents(studentA, studentB)).toEqual(studentB);
  });
});

describe("makeFlag", function () {
  it("returns an object with the given color and icon", function () {
    expect(makeFlag("red", "circle")).toEqual({ color: "red", icon: "circle" });
  });
  it("works with empty strings", function () {
    expect(makeFlag("", "")).toEqual({ color: "", icon: "" });
  });
});

describe("increment", function () {
  it("increments the value by 1", function () {
    expect(increment({ value: 1 })).toEqual({ value: 2 });
  });
  it("works with negative numbers", function () {
    expect(increment({ value: -5 })).toEqual({ value: -4 });
  });
  it("works with 0", function () {
    expect(increment({ value: 0 })).toEqual({ value: 1 });
  });
  it("works with floats", function () {
    expect(increment({ value: 9.8 })).toEqual({ value: 10.8 });
  });
});

describe("getTaxicabDistance", function () {
  it("returns the correct taxicab distance", function () {
    expect(getTaxicabDistance({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(7);
  });
  it("returns 0 if from and to are the same location", function () {
    expect(getTaxicabDistance({ x: 5, y: 5 }, { x: 5, y: 5 })).toBe(0);
  });
  it("works with negative coordinates", function () {
    expect(getTaxicabDistance({ x: 1, y: 2 }, { x: -1, y: -2 })).toBe(6);
  });
});

describe("getHerbivores", function () {
  it("returns herbivores", function () {
    expect(
      getHerbivores([
        { name: "Cow", isHerbivore: true },
        { name: "Sheep", isHerbivore: true },
        { name: "Lion", isHerbivore: false },
      ]),
    ).toEqual([
      { name: "Cow", isHerbivore: true },
      { name: "Sheep", isHerbivore: true },
    ]);
  });
  it("returns single herbivore", function () {
    expect(
      getHerbivores([
        { name: "Cow", isHerbivore: true },
        { name: "Lion", isHerbivore: false },
      ]),
    ).toEqual([{ name: "Cow", isHerbivore: true }]);
  });
  it("returns empty array for no herbivores", function () {
    expect(getHerbivores([{ name: "Lion", isHerbivore: false }])).toEqual([]);
  });
  it("returns empty array for empty input", function () {
    expect(getHerbivores([])).toEqual([]);
  });
});

describe("getCarnivoreNames", function () {
  it("returns names of carnivorous animals", function () {
    expect(
      getCarnivoreNames([
        { name: "Lion", isCarnivore: true },
        { name: "Cow", isCarnivore: false },
        { name: "Wolf", isCarnivore: true },
      ]),
    ).toEqual(["Lion", "Wolf"]);
  });

  it("returns name of single carnivore", function () {
    expect(
      getCarnivoreNames([
        { name: "Lion", isCarnivore: true },
        { name: "Cow", isCarnivore: false },
      ]),
    ).toEqual(["Lion"]);
  });
  it("returns empty array for no carnivores", function () {
    expect(getCarnivoreNames([{ name: "Cow", isCarnivore: false }])).toEqual(
      [],
    );
  });
  it("returns empty array for empty input", function () {
    expect(getCarnivoreNames([])).toEqual([]);
  });
});

describe("getTotalCost", function () {
  it("returns 0 for empty cart", function () {
    expect(getTotalCost([])).toBe(0);
  });
  it("returns 0 for items with zero quantity", function () {
    expect(getTotalCost([{ name: "A", quantity: 0, price: 5 }])).toBe(0);
  });
  it("returns cost of single item", function () {
    expect(getTotalCost([{ name: "A", quantity: 1, price: 5 }])).toBe(5);
  });
  it("returns cost of items with integer prices", function () {
    expect(
      getTotalCost([
        { name: "A", quantity: 1, price: 5 },
        { name: "B", quantity: 2, price: 3 },
      ]),
    ).toBe(11);
  });
  it("returns the total cost of cart", function () {
    expect(
      getTotalCost([
        { name: "A", quantity: 3, price: 3.12 },
        { name: "B", quantity: 1, price: 2.5 },
        { name: "B", quantity: 0, price: 6.7 },
      ]),
    ).toBeCloseTo(11.86);
  });
});

describe("zip", function () {
  it("zips two arrays into an object", function () {
    expect(zip(["x", "y"], [6, 7])).toEqual({ x: 6, y: 7 });
  });
  it("handles string values", function () {
    expect(zip(["x"], ["x"])).toEqual({ x: "x" });
  });
  it("returns empty object for empty arrays", function () {
    expect(zip([], [])).toEqual({});
  });
});

describe("countCharacters", function () {
  it("returns empty object for empty string", function () {
    expect(countCharacters("")).toEqual({});
  });
  it("counts each character in a word", function () {
    expect(countCharacters("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });
  it("is case sensitive", function () {
    expect(countCharacters("bbBbbCcC")).toEqual({ b: 4, B: 1, c: 1, C: 2 });
  });
  it("handles non-letter characters", function () {
    expect(countCharacters("a!a!!")).toEqual({ a: 2, "!": 3 });
  });
});
