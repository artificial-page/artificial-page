# 🔬 Watch

An example `./bin/watch` executable:

```js
#!/usr/bin/env node

const path = require("path")

require("artificial-page").watch({
  rootPath: path.join(__dirname, "../"),
  initSteps: [
    {
      async: [
        // Watch TypeScript CJS
        {
          command: "npx",
          args: ["tsc", "-w", "--preserveWatchOutput", "--project", "tsconfig.json"],
          wait: false,
        },
        
        // Watch TypeScript ESM
        {
          command: "npx",
          args: ["tsc", "-w", "--preserveWatchOutput" "--project", "tsconfig.esm.json"],
          wait: false,
        },
      ],
    }
  ],
  watchSteps: [
    {
      async: [
        // Auto spec
        {
          function: "src/artificialPage/project/autoSpec",
          srcPath: path.join(__dirname, "../src"),
        },

        // Dotfile control flow processor
        {
          function: "src/artificialPage/project/dotfileControlFlow",
          srcPath: path.join(__dirname, "../src"),
        },
        
        // Relative base paths processor
        {
          function: "src/artificialPage/project/relativeBasePaths",
          distPaths: [
            path.join(__dirname, "../dist/cjs"),
            path.join(__dirname, "../dist/esm"),
          ],
        },

        // MJS extensions processor
        {
          function: "src/artificialPage/project/mjsExtensions",
          distPath: path.join(__dirname, "../dist/esm"),
        },
      ],
    },
  ],
})
```

> ⚠️ Use `initSteps` to define steps that run once before `watchSteps`.

## Watch step types

* `command` - Bash command with `args`
* `function` - Function path with custom options
* `vendor` - Vendor a directory from a `gitUrl` and `gitPath`