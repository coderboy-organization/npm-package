### npm-package

`sabbir-npm-package` using process

```bash
pnpm add sabbir-npm-package
```

When installation is finished then just import this package and use on your project

```js
import { Package } from "sabbir-npm-package"; // import package

const obj = new Package(); // create a instance from package class
console.log(obj.generate()); // let's call our generate() method
```
