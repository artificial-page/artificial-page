# 🔬 Watch

An example `./bin/watch` executable:

```js
#!/usr/bin/env node

const path = require("path")

require("artificial-page").watch({
  rootPath: path.join(__dirname, "../"),
  steps: {
    async: [
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
  {
    async: [
      // Auto spec
      {
        function: "src/artificial-page/project/autoSpec",
        srcPath: path.join(__dirname, "../src"),
      },

      // Dotfile control flow processor
      {
        function: "src/artificial-page/project/dotfileControlFlow",
        srcPath: path.join(__dirname, "../src"),
      },
      
      // Relative base paths processor
      {
        function: "src/artificial-page/project/relativeBasePaths"
        distPaths: [
          path.join(__dirname, "../dist/cjs"),
          path.join(__dirname, "../dist/esm"),
        ],
      },

      // MJS extensions processor
      {
        function: "src/artificial-page/project/mjsExtensions"
        distPath: path.join(__dirname, "../dist/esm"),
      },
    ],
  },
})
```