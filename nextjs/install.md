---
order: 30
title: 安装
---

[官网教程](https://nextjs.org/docs#setup)

#### 快速开始

> npx create-next-app

#### 安装

> npm install --save next react react-dom

#### 在package.json文件中添加以下代码

```bash
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

### 页面文件位置

pages文件下的每一个.js文件相当于每一个路由，自动处理和渲染。

举个栗子🌰：

新建文件 ./pages/index.js
```base
  export default () => <div>Welcome to next.js!</div>
```


### 代码自动分割

每个页面中只导入本页面`import`引入并且使用的代码，不会加载不需要的代码

举个栗子🌰： 

```
import cowsay from 'cowsay-browser'

export default () =>
  <pre>
    {cowsay.say({ text: 'hi there!' })}
  </pre>

```

运行 npm run dev 命令并打开 http://localhost:3000。 
如果你想使用其他端口，可运行 npm run dev -- -p <设置端口号>



Next.js 只支持[React 16](https://reactjs.org/blog/2017/09/26/react-v16.0.html).

