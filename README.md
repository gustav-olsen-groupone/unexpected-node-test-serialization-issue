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
