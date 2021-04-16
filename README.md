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

After asking you some questions, the command generates two files:
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