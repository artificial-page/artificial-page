# Builder

🔧 Extensible TypeScript build tool

## Install

```bash
npm i @artificial-page/builder
```

## Build

Create a `bin/build` executable:

```bash
touch bin/build
chmod +x bin/build
```

Inside the `bin/build` executable:

```js
#!/usr/bin/env node

require("@artificial-page/builder").default([
  { async: [
      // Remove dist directory
      { command: "rm", args: ["-rf", "dist"] },

      // Vendor external repo source
      { vendor: "src/artificial-page",
        gitUrl: "git@github.com:artificial-page/artificial-page.git",
        gitDir: "src",
      },
    ],
  },
  { async: [
      // Build TypeScript CJS
      { command: "npx", args: ["tsc", "--project", "tsconfig.json"] },
      
      // Build TypeScript ESM
      { command: "npx", args: ["tsc", "--project", "tsconfig.esm.json"] },
    ],
  },
  { async: [
      // Path builder function
      { function: "src/artificial-page/coders/tsPaths",
        baseDir: "src",
      },

      // MJS builder function
      { function: "src/artificial-page/coders/tsMjs" },
    ],
  },
  { command: "printf", args: [`"Build complete.\n"`] }
])
```

## Example builder function

```ts
export default ({ source }: {
  path: string,
  source: string,
  config: Record<string, any>
}): Record<string, string> => {
  return { [path]: source }
}
```