---
order: 50
title: 预加载页面
---

## 预加载页面

只有生产环境才有此功能

Next.js有一个API允许预加载页面

用 Next.js 服务端渲染你的页面，可以达到所有你应用里所有未来会跳转的路径即时响应，有效的应用 Next.js，可以通过预加载应用程序的功能，最大程度的初始化网站性能。

> Next.js 的预加载功能只预加载 JS 代码。当页面渲染时，你可能需要等待数据请求。

<link>用法
给<Link>添加 prefetch 属性，Next.js 将会在后台预加载这些页面。
```
import Link from 'next/link'

export default () =>
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
```

### 命令式 prefetch 写法
大多数预加载是通过<Link />处理的，但是我们还提供了命令式 API 用于更复杂的场景。
```
import { withRouter } from 'next/router'

export default withRouter(({ router }) =>
  <div>
    <a onClick={() => setTimeout(() => router.push('/dynamic'), 100)}>
      A route transition will happen after 100ms
    </a>
    {// but we can prefetch it!
    router.prefetch('/dynamic')}
  </div>
)
```

⚠️ 路由实例只允许在应用程序的客户端。以防服务端渲染发生错误，建议 prefetch 事件写在componentDidMount()生命周期里。

```
import React from 'react'
import { withRouter } from 'next/router'

class MyLink extends React.Component {
  componentDidMount() {
    const { router } = this.props
    router.prefetch('/dynamic')
  }
  
  render() {
    const { router } = this.props
    return (
       <div>
        <a onClick={() => setTimeout(() => router.push('/dynamic'), 100)}>
          A route transition will happen after 100ms
        </a>
      </div>   
    )
  }
}

export default withRouter(MyLink)
```

