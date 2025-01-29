# Reproduction of UnexpectedError serialization issue with node:test

When running unexpected with the new built-in test runner in node.js the errors are not serialized properly.

To reproduce the issue run:

```
$ npm test
```

or

```
$ node --test
```

... in this repo after installing dependencies.

This is the output that is generated currently:

```
▶ unexpected-node-test-serialization-issue
  ✖ should be a function (3.208958ms)
    "Error [UnexpectedError]: \n\x1B[31m\x1B[1mexpected\x1B[22m\x1B[39m \x1B[36m'not a function'\x1B[39m \x1B[31m\x1B[1mto be a function\x1B[22m\x1B[39m\n\n    at TestContext.<anonymous> (file:///home/gno/Scratch/unexpected-node-test-serialization-issue/test/unexpected-node-test-serialization-issue.spec.js:7:5)\n    at Test.runInAsyncScope (node:async_hooks:211:14)\n    at Test.run (node:internal/test_runner/test:931:25)\n    at Test.start (node:internal/test_runner/test:829:17)\n    at node:internal/test_runner/test:1308:71\n    at node:internal/per_context/primordials:483:82\n    at new Promise (<anonymous>)\n    at new SafePromise (node:internal/per_context/primordials:451:29)\n    at node:internal/per_context/primordials:483:9\n    at Array.map (<anonymous>)\n    set UNEXPECTED_FULL_TRACE=true to see the full stack trace {\n  errorMode: 'default',\n  parent: Error [UnexpectedError]\n      at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1843:26)\n      at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n      at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:148:7)\n      at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n      at /home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:81\n      at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1824:30)\n      at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n      at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:191:7)\n      at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n      at expectPrototype._expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1538:23)\n      at expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:2017:19)\n      at TestContext.<anonymous> (file:///home/gno/Scratch/unexpected-node-test-serialization-issue/test/unexpected-node-test-serialization-issue.spec.js:7:5)\n      at Test.runInAsyncScope (node:async_hooks:211:14)\n      at Test.run (node:internal/test_runner/test:931:25)\n      at Test.start (node:internal/test_runner/test:829:17)\n      at node:internal/test_runner/test:1308:71 {\n    errorMode: 'default',\n    parent: Error [UnexpectedError]\n        at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1843:26)\n        at expectPrototype.fail (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1743:10)\n        at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:13:14)\n        at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n        at /home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:81\n        at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1824:30)\n        at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n        at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:148:7)\n        at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n        at /home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:81\n        at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1824:30)\n        at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n        at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:191:7)\n        at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n        at expectPrototype._expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1538:23)\n        at expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:2017:19) {\n      errorMode: 'default',\n      parent: [Error],\n      originalError: undefined\n    },\n    originalError: undefined\n  },\n  originalError: undefined,\n  _hasSerializedErrorMessage: true\n}"
```

The output with `FORCE_COLORS=0`:

```
✖ should be a function (1.976541ms)
  "Error [UnexpectedError]: \nexpected 'not a function' to be a function\n\n    at TestContext.<anonymous> (file:///home/gno/Scratch/unexpected-node-test-serialization-issue/test/unexpected-node-test-serialization-issue.spec.js:7:5)\n    at Test.runInAsyncScope (node:async_hooks:211:14)\n    at Test.run (node:internal/test_runner/test:931:25)\n    at Test.start (node:internal/test_runner/test:829:17)\n    at node:internal/test_runner/test:1308:71\n    at node:internal/per_context/primordials:483:82\n    at new Promise (<anonymous>)\n    at new SafePromise (node:internal/per_context/primordials:451:29)\n    at node:internal/per_context/primordials:483:9\n    at Array.map (<anonymous>)\n    set UNEXPECTED_FULL_TRACE=true to see the full stack trace {\n  errorMode: 'default',\n  parent: Error [UnexpectedError]\n      at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1843:26)\n      at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n      at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:148:7)\n      at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n      at /home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:81\n      at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1824:30)\n      at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n      at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:191:7)\n      at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n      at expectPrototype._expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1538:23)\n      at expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:2017:19)\n      at TestContext.<anonymous> (file:///home/gno/Scratch/unexpected-node-test-serialization-issue/test/unexpected-node-test-serialization-issue.spec.js:7:5)\n      at Test.runInAsyncScope (node:async_hooks:211:14)\n      at Test.run (node:internal/test_runner/test:931:25)\n      at Test.start (node:internal/test_runner/test:829:17)\n      at node:internal/test_runner/test:1308:71 {\n    errorMode: 'default',\n    parent: Error [UnexpectedError]\n        at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1843:26)\n        at expectPrototype.fail (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1743:10)\n        at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:13:14)\n        at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n        at /home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:81\n        at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1824:30)\n        at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n        at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:148:7)\n        at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n        at /home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:81\n        at expectPrototype._callInNestedContext (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1824:30)\n        at wrappedExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1402:26)\n        at Object.handler (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/assertions.js:191:7)\n        at expectPrototype._executeExpect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1517:44)\n        at expectPrototype._expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:1538:23)\n        at expect (/home/gno/Scratch/unexpected-node-test-serialization-issue/node_modules/unexpected/build/lib/createTopLevelExpect.js:2017:19) {\n      errorMode: 'default',\n      parent: [Error],\n      originalError: undefined\n    },\n    originalError: undefined\n  },\n  originalError: undefined,\n  _hasSerializedErrorMessage: true\n}"
```
