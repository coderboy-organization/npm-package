## NPM Package creation

#### Step 1: Create a `package.json` file

```json
{
  "name": "sabbir-npm",
  "version": "1.0.0",
  "description": "",
  "main": "lib/index.js",
  "categories": ["Education", "Other"],
  "keywords": ["sabbir", "npm-package"],
  "author": "Sabbir",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3",
    "xo": "^0.56.0"
  },
  "scripts": {
    "test": "xo --fix",
    "build": "tsc",
    "prepare": "npm run build",
    "dev": "nodemon src/index.ts"
  }
}
```

#### Step 2: Create a `tsconfig.json` file

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "declaration": true, // this will create a .d.ts file based on main file
    "outDir": "lib",
    "strict": true
  }
}
```

#### Step 3: Create a `.gitignore` file

```txt
node_modules
pnpm-lock.yaml
package-lock.json
lib
```

#### Step 4: Create a `index.ts` file that will export everything

```bash
export { Package } from "./package";
```

#### Step 5: Create a `package.ts` file that will hold our functionality

```bash
export class Package {
  generate = (length: number = 5) => {
    let result: string = "";
    for (let i = 0; i <= length; i++) {
      result += i;
    }
    console.log(result);
  };
}
```

### Locally test our created package

To test our recently created package then just follow these step

#### Step 1: from your package root direcotry run this command

```bash
npm link
```

#### Step 2: Then go to your testing directory and run this command to install

```bash
npm link sabbir-npm
```

### Alright now publish our npm package

Publish your npm package to `npmjs` then follow these step

#### Step 1: Creating a `npmjs` account

```bash
https://www.npmjs.com/login
```

#### Step 2: Come back your terminal and run

```bash
npm login
```

Then just press enter to open with browser to login. If is it successfully login then your will see like this message `Logged in on https://registry.npmjs.org/.`

#### Step 3:
