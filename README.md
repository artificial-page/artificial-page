# Artificial Page

🔧 TypeScript low code productivity pattern and extensible build tool

## Install

```bash
npm i --save-dev artificial-page
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

require("artificial-page").default([
  { async: [
      // Remove dist directory
      { command: "rm", args: ["-rf", "dist"] },

      // Vendor subdirectory of external git repo
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
      // Path custom processor function
      { function: "src/artificial-page/coders/tsPaths",
        baseDir: "src",
      },

      // MJS custom processor function
      { function: "src/artificial-page/coders/tsMjs" },
    ],
  },
  { command: "printf", args: [`"Build complete.\n"`] },
])
```

## Custom processor function API

```ts
export default ({ source }: {
  path: string,
  source: string,
  config: Record<string, any>
}): Record<string, string> => {
  return { [path]: source }
}
```

> ℹ️  Functions may be asynchronous.