import { test, expect } from "@jest/globals";
import { readLCOV, readLCOVSync } from "../source";

test("basic", () => {
  return readLCOV("./test/lcov.info").then((lcov) => {
    expect(Array.isArray(lcov)).toEqual(true);
    expect(lcov[0].file).toEqual("source/index.ts");
  });
});

test("missing file", () => {
  return readLCOV("./test/missing.info").then((lcov) => {
    expect(Array.isArray(lcov)).toEqual(true);
    expect(lcov.length).toEqual(0);
  });
});

test("basic sync", () => {
  const lcov = readLCOVSync("./test/lcov.info");
  expect(Array.isArray(lcov)).toBe(true);
  expect(lcov[0].file).toBe("source/index.ts");
});

test("missing file sync", () => {
  const lcov = readLCOVSync("./test/missing.info")
  expect(Array.isArray(lcov)).toEqual(true);
  expect(lcov.length).toEqual(0);
});
