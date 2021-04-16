# 🏗️ Build

An example `./bin/build` executable:

```js
#!/usr/bin/env node

require("artificial-page").build([
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