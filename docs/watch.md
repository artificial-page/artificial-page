# 🔬 Watch

Inside the `./bin/watch` executable:

```js
#!/usr/bin/env node

require("artificial-page").watch([
  { async: [
      // Build TypeScript CJS
      { command: "npx",
        args: ["tsc", "-w", "--preserveWatchOutput", "--project", "tsconfig.json"],
      },
      
      // Build TypeScript ESM
      { command: "npx",
        args: ["tsc", "-w", "--preserveWatchOutput" "--project", "tsconfig.esm.json"],
      },
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
])
```