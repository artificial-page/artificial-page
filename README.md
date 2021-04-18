# 🦾 Artificial Page

TypeScript build tool for low code experimentation

## 🏁 Install

```bash
npm i --save-dev artificial-page
```

## 🪄 Generate

```bash
npx artificial-page
```

After selecting [strategies](#strategies) to install, the command generates two files:

  * [`./bin/build`](docs/build.md)
  * [`./bin/watch`](docs/watch.md)

These executables act as the entrypoint for building and watching your TypeScript project.

## ♟️ Strategies

| Name | Description |
| --- | --- |
| Auto spec | Generate specs for new source code files |
| Dotfile control flow | Define the control flow of functions using dotfiles |
| Relative base paths | Makes [`baseUrl` paths](https://www.typescriptlang.org/tsconfig#baseUrl) relative |
| MJS extensions | Adds MJS extensions to [ES2020 module](https://www.typescriptlang.org/tsconfig#module) builds |