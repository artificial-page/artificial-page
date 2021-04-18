# 🏗️ Build

An example `./bin/build` executable:

```js
#!/usr/bin/env node

const path = require("path")

require("artificial-page").build({
  rootPath: path.join(__dirname, "../"),
  buildSteps: [
    {
      async: [
        // Remove dist directory
        { command: "rm", args: ["-rf", "dist"] },

        // Vendor from external git repo directory
        { 
          vendor: "src/artificialPage",
          gitUrl: "git@github.com:artificial-page/artificial-page.git",
          gitPath: "src/artificialPage",
        },
      ],
    },
    {
      async: [
        // Build TypeScript CJS
        { command: "npx", args: ["tsc", "--project", "tsconfig.json"] },
        
        // Build TypeScript ESM
        { command: "npx", args: ["tsc", "--project", "tsconfig.esm.json"] },
      ],
    },
    {
      async: [
        // Dotfile control flow processor
        {
          function: "src/artificial-page/project/dotfileControlFlow",
          srcPath: path.join(__dirname, "../src"),
        },
        
        // Relative base paths processor
        {
          function: "src/artificial-page/project/relativeBasePaths",
          distPaths: [
            path.join(__dirname, "../dist/cjs"),
            path.join(__dirname, "../dist/esm"),
          ],
        },

        // MJS extensions processor
        {
          function: "src/artificial-page/project/mjsExtensions",
          distPath: path.join(__dirname, "../dist/esm"),
        },
      ],
    },
    { command: "printf", args: [`"Build complete.\n"`] },
  ]
})
```