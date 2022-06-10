Demo project for [12919](https://github.com/facebook/jest/issues/12919)

Minimal reproducible case. To reproduce just `npm install` and `npm test`.

The `coverage` folder has been created by jest and is consistent with the
following output:

```bat
>npm test
> test
> jest --coverage

 PASS  ./foo.test.js
  E
    √ is an exception (5 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   33.33 |      100 |       0 |   33.33 |
 foo.js   |   33.33 |      100 |       0 |   33.33 | 3-4
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.329 s, estimated 1 s
Ran all test suites.

>
```
