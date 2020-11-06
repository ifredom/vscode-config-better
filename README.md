# vscode-config-better

最好的 vscode 前端配置。（The better config for vscode）

## how to use

`复制`到 vscode 中的 settings.json 中。（Copy content to vscode settings.json file）

## 避免折行

```js
  // 使用vetur格式化vue文件时，避免折行
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto"
    }
  },
  "vetur.format.defaultFormatter.js": "vscode-typescript",
```
