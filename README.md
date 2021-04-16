# 🦾 Artificial Page

TypeScript low code productivity pattern and extensible build tool

## 🏁 Install

```bash
npm i --save-dev artificial-page
```

## 🪄 Generate

```bash
npx artificial-page
```

This command asks you some questions and generates two files:
  * `./bin/build`
  * `./bin/watch`

These files act as the configuration for your build, enabling the following features:

* Bash commands
* Custom processor functions
* Vendoring subdirectories from git repos

## 🏗️ Build

```bash
./bin/build
```

[Learn more about the build file.](docs/build.md)

## 🔬 Watch

```bash
./bin/watch
```

[Learn more about the watch file.](docs/watch.md)