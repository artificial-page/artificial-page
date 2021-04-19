# 🦾 Artificial Page

TypeScript build tool for low code experimentation

## 🏁 Install

```bash
npm i --save-dev artificial-page fast-glob
```

## 🪄 Generate

```bash
npx artificial-page
```

After selecting [strategies](#%EF%B8%8F-strategies) to install, the command generates two files:

  * [`./bin/build`](docs/build.md)
  * [`./bin/watch`](docs/watch.md)

These executables act as the entrypoint for building and watching your TypeScript project.

## ♟️ Strategies

| Name | Description |
| :--- | :--- |
| Auto spec | Generate specs for new source code files |
| Dotfile control flow | Define the control flow of function directories using dotfiles |
| Mirrored delete | Delete compiled JS when deleting a corresponding TS file |
| Relative base paths | Make [`baseUrl` paths](https://www.typescriptlang.org/tsconfig#baseUrl) relative in compiled JS |
| MJS extensions | Adds MJS extensions to [ES2020 module](https://www.typescriptlang.org/tsconfig#module) compiled JS |