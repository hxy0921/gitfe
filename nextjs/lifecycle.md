---
order: 20
title: 生成head、获取数据及生命周期
---

## head
通过一个内置组件来将<head>加载到页面中

举个栗子🌰：

```
  import Head from 'next/head'

  function Index() {
    return (
      <div>
        <Head>
          <title>hello, nextJs!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      </div>
    )
  }

  export default Index
```

![head](http://f.shudong.wang/shudong/4Y5BfRFL2P20191105170917907.png)

注意：<head>会在组件卸载时被清除，所以需要确保在每个页面中定义了所需要的内容。

为了避免出现重复的<head>标签，保证<head>只渲染一次，我们可以定义一个key属性

举个栗子🌰：

当有两个<head>标签时，只有最后一个<head>被渲染
```
import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Head>
      <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
    </Head>
  </div>
)
```

## 获取数据以及组件生命周期
如果我们需要一个带有状态、生命周期或者有初始数据的组件时

```
import React from 'react'

export default class extends React.Component {
  # 异步获取 JS 普通对象，并绑定在props上
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}
```

当页面渲染加载数据时，我们使用 getInitalProps 方法，异步获取js数据并绑定在props上。

当页面初始化加载时，getInitialProps只会加载在服务端。只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行getInitialProps。

当服务渲染时，getInitalProps 会将数据序列化，确保 getInitalProps 返回的是一个普通js对象，而不是Data， Map，或者 Set 类型。

> `getInitalProps` 不能在自组件中使用，是能在pages文件下使用。
> `getInitalProps` 里只能使用需要在服务端渲染的模块。

给无状态组件定义getInitialProps：

```
const Page = ({ stars }) =>
  <div>
    Next stars: {stars}
  </div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
```

getInitialProps入参对象的属性有：

- pathname - URL 的 path 部分
- query - URL 的 query 部分，并被解析成对象
- asPath - 显示在浏览器中的实际路径（包含查询部分），为String类型
- req - HTTP 请求对象 (只有服务器端有)
- res - HTTP 返回对象 (只有服务器端有)
- jsonPageRes - 获取数据响应对象 (只有客户端有)
- err - 渲染过程中的任何错误


