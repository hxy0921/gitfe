---
order: 30
title: 路由
---

## 路由

<Link>

使用<Link>组件实现客户端的路由切换

举个栗子🌰：

```
// pages/index.js
import Link from 'next/link'

export default () =>
  <div>
    Click{' '}
    <Link href="/about">
      <a>here</a>
    </Link>{' '}
    to read more
  </div>
```

可以给<Link>添加 prefetch 属性，Next.js 将会在后台预加载这些页面。

举个栗子🌰：

```
import Link from 'next/link'

// example header component
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
    </ul>
  </nav>
```

命令式 prefetch 写法

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

note: 路由实例只允许在应用程序的客户端。以防服务端渲染发生错误，建议 prefetch 事件写在componentDidMount()生命周期里。

栗子🌰：

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

## 自定义服务端路由



