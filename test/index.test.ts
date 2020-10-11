import { beforeEach, test, expect } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readLCOV, readLCOVSync } from "../source";

const lcov = `
TN:
SF:source/index.ts
FN:4,readLCOV
FN:5,(anonymous_2)
FN:10,readLCOVSync
FNF:3
FNH:3
FNDA:2,readLCOV
FNDA:2,(anonymous_2)
FNDA:2,readLCOVSync
DA:1,1
DA:2,1
DA:4,1
DA:5,2
DA:6,2
DA:10,1
DA:11,2
DA:12,2
LF:8
LH:8
BRF:0
BRH:0
end_of_record
`;

beforeEach(async () => {
  mock({
    "/test": {
      "lcov.info": lcov
    }
  })
});

afterEach(async () => {
  restore();
});

test("basic", async () => {
  return readLCOV("/test/lcov.info").then((records) => {
    expect(Array.isArray(records)).toEqual(true);
    expect(records[0].file).toEqual("source/index.ts");
  });
});

test("missing file", async () => {
  return readLCOV("/test/missing.info").then((records) => {
    expect(Array.isArray(records)).toEqual(true);
    expect(records.length).toEqual(0);
  });
});

test("basic sync", () => {
  const records = readLCOVSync("/test/lcov.info");
  expect(Array.isArray(records)).toBe(true);
  expect(records[0].file).toBe("source/index.ts");
});

test("missing file sync", () => {
  const records = readLCOVSync("/test/missing.info")
  expect(Array.isArray(records)).toEqual(true);
  expect(records.length).toEqual(0);
});
