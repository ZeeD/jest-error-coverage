Demo project for [12919](https://github.com/facebook/jest/issues/12919)

Minimal reproducible case. To reproduce just `npm install` and `npm test`.

```
$ npm test

> test
> jest

 PASS  ./foo.test.ts
  E
    ✓ is an exception (6 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |       50 |     100 |     100 |
 foo.ts   |     100 |       50 |     100 |     100 | 3
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.337 s, estimated 2 s
Ran all test suites.
$
```
