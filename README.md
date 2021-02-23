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

## Delete `␍`eslint(prettier/prettier) 错误的解决办法

项目根目录下创建文件`.prettierrc`,然后重启vscode

```json
{
  "endOfLine": "auto"
}

```