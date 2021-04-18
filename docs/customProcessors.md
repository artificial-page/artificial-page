# ✍️ Custom processors

```ts
export default ({ source }: {
  path: string,
  source: string,
  mode: "build" |
    "buildDir" |
    "watchAdd" |
    "watchAddDir" |
    "watchChange" |
    "watchChangeDir" |
    "watchUnlink" |
    "watchUnlinkDir" |
  config: Record<string, any>
}): Record<string, string> => {
  return { [path]: source }
}
```

> ℹ️  Functions may be asynchronous.