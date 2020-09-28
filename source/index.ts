import { readFile, readFileSync } from "read-file-safe";
import parseLCOV, { LCOVRecord, FunctionsDetails, BranchesDetails, LinesDetails } from "parse-lcov";

export async function readLCOV(path: string) {
  return readFile(path).then((lcov) => {
    return parseLCOV(lcov);
  });
}

export function readLCOVSync(path: string) {
  const lcov = readFileSync(path);
  return parseLCOV(lcov);
}

export {
  LCOVRecord,
  FunctionsDetails,
  BranchesDetails,
  LinesDetails
}
