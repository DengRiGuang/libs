

# 安装

## npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```
npm install libs --save
```

## CDN
目前可以通过 unpkg.com/libs 获取到最新版本的资源，在页面上引入 js 文件即可开始使用。
```
<script src="https://unpkg.com/libs/dist/libs.min.js"></script>
```


## 公用属性

### Attrs

| 参数       |     说明 |   类型 | 可选值 | 默认值 |
| ---------- | -------: | -----: | -----: | -----: |
| name       |     名称 | string |      - |      - |
| identifier |   标识符 | string |      - |      - |
| type       |     类型 | string |      - |      - |
| tag        |     标签 | string |      - |      - |
| sn         |       SN | string |      - |      - |
| belong     | 所属用户 | string |      - |      - |
| protocol   |     协议 | string |      - |      - |
