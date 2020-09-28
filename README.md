<div align="center">
  <h1>read-lcov-safe</h1>
  <a href="https://npmjs.com/package/read-lcov-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/read-lcov-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/read-lcov-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/read-lcov-safe.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/read-lcov-safe?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/read-lcov-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/read-lcov-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/read-lcov-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Read and parse an lcov file without try catch.

## Installation

```bash
yarn add read-lcov-safe
```

```bash
npm install read-lcov-safe
```

## API

### Usage
```ts
import {
  readLCOV,
  readLCOVSync,
  LCOVRecord,
  FunctionsDetails,
  BranchesDetails,
  LinesDetails
} from "read-lcov-safe";

readLCOV(path).then((lcov) => {
  console.log(lcov);
  // Example output:
  // [{
  //   title: "",
  //   file: "source/file.ts",
  //   functions: {
  //     found: 2,
  //     hit: 2,
  //     details: [{
  //       line: 5,
  //       hit: 2,
  //       name: "functionA"
  //     }, {
  //       hit: 16,
  //       line: 8,
  //       name: "functionB"
  //     }]
  //   },
  //   branches: {
  //     found: 3,
  //     hit: 3,
  //     details: [{
  //       block: 0,
  //       branch: 0,
  //       line: 5,
  //       taken: 1
  //     }, {
  //       block: 1,
  //       branch: 0,
  //       line: 9,
  //       taken: 0
  //     }]
  //   },
  //   lines: {
  //     found: 13,
  //     hit: 13,
  //     details: [{
  //       hit: 1,
  //       line: 1
  //     }]
  //   }
  // }]
});
```
### Types
```ts
import { readLCOV, readLCOVSync } from "read-lcov-safe";

function readLCOV(path: string): Promise<LCOVRecord[]>;

function readLCOVSync(path: string): LCOVRecord[];

type LCOVRecord = {
  title: string;
  file: string;
  functions: LCOVStats & {
    details: FunctionsDetails[];
  };
  branches: LCOVStats & {
    details: BranchesDetails[];
  };
  lines: LCOVStats & {
    details: LinesDetails[];
  };
}

type LCOVStats = {
  found: number;
  hit: number;
}

type FunctionsDetails = {
  name: string;
  line: number;
  hit?: number;
}

type BranchesDetails = {
  line: number;
  block: number;
  branch: number;
  taken: number;
};

type LinesDetails = {
  line: number;
  hit: number;
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/read-lcov-safe.svg"></h2>

- [parse-lcov](https://www.npmjs.com/package/parse-lcov): Parse LCOV
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/read-lcov-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): undefined

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/read-lcov-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

