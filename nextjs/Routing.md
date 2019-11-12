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

客户端路由行为与浏览器很相似：

> 1.组件获取
> 2.如果组件定义了getInitialProps，数据获取了。如果有错误情况将会渲染 _error.js。
> 3.1和2都完成了，pushState执行，新组件被渲染。

如果需要注入pathname, query 或 asPath到你组件中，你可以使用withRouter。

### URL 对象

组件<Link>接收 URL 对象，而且它会自动格式化生成 URL 字符串
```
import Link from 'next/link'

export default () =>
  <div>
    Click{' '}
    <Link href={{ pathname: '/about', query: { name: 'Zeit' }}}>
      <a>here</a>
    </Link>{' '}
    to read more
  </div>
```
将生成 URL 字符串/about?name=Zeit，你可以使用任何在Node.js URL module documentation定义过的属性。

### 替换路由

<Link>组件默认将新 url 推入路由栈中。你可以使用replace属性来防止添加新输入。
```
import Link from 'next/link'

export default () =>
  <div>
    Click{' '}
    <Link href="/about" replace>
      <a>here</a>
    </Link>{' '}
    to read more
  </div>
```

### 组件支持点击事件 onClick

<Link>支持每个组件所支持的onClick事件。如果你不提供<a>标签，只会处理onClick事件而href将不起作用。

```
import Link from 'next/link'

export default () =>
  <div>
    Click{' '}
    <Link href="/about">
      <img src="/static/image.png" alt="image" />
    </Link>
  </div>
```

### 暴露 href 给子元素

如子元素是一个没有 href 属性的<a>标签，我们将会指定它以免用户重复操作。然而有些时候，我们需要里面有<a>标签，但是Link组件不会被识别成超链接，结果不能将href传递给子元素。在这种场景下，你可以定义一个Link组件中的布尔属性passHref，强制将href传递给子元素。

注意: 使用a之外的标签而且没有通过passHref的链接可能会使导航看上去正确，但是当搜索引擎爬行检测时，将不会识别成链接（由于缺乏 href 属性），这会对你网站的 SEO 产生负面影响。

```
import Link from 'next/link'
import Unexpected_A from 'third-library'

export default ({ href, name }) =>
  <Link href={href} passHref>
    <Unexpected_A>
      {name}
    </Unexpected_A>
  </Link>
```

### 禁止滚动到页面顶部

<Link>的默认行为就是滚到页面顶部。当有 hash 定义时（＃），页面将会滚动到对应的 id 上，就像<a>标签一样。为了预防滚动到顶部，可以给<Link>加scroll={false}属性：

```
<Link scroll={false} href="/?counter=10"><a>Disables scrolling</a></Link>
<Link href="/?counter=10"><a>Changes with scrolling to top</a></Link>
```

### 命令式

我们可以使用next/router实现客户端路由切换

```
import Router from 'next/router'

export default () =>
  <div>
    Click <span onClick={() => Router.push('/about')}>here</span> to read more
  </div>
```

### 拦截器 popstate

有些情况（比如使用custom router），你可能想监听popstate，在路由跳转前做一些动作。
比如，你可以操作 request 或强制 SSR 刷新

```
import Router from 'next/router'

Router.beforePopState(({ url, as, options }) => {
  // 仅允许下面两个路由
  if (as !== "/" || as !== "/other") {
    window.location.href = as
    return false
  }

  return true
});
```

如果你在beforePopState中返回 false，Router将不会执行popstate事件。

Router对象的 API 如下：

- route - 当前路由的String类型
- pathname - 不包含查询内容的当前路径，为String类型
- query - 查询内容，被解析成Object类型. 默认为{}
- asPath - 展现在浏览器上的实际路径，包含查询内容，为String类型
- push(url, as=url) - 页面渲染第一个参数 url 的页面，浏览器栏显示的是第二个参数 url
- replace(url, as=url) - performs a replaceState call with the given url
- beforePopState(cb=function) - 在路由器处理事件之前拦截.
note： push 和 replace 函数的第二个参数as，是为了装饰 URL 作用。如果你在服务器端设置了自定义路由将会起作用。

### URL 对象用法

我们可以使用push 或 replace可接收的 URL 对象来生成 URL。
```
import Router from 'next/router'

const handler = () =>
  // /about?name=Zeit
  Router.push({
    pathname: '/about',
    query: { name: 'Zeit' }
  })

export default () =>
  <div>
    Click <span onClick={handler}>here</span> to read more
  </div>
```
也可以像<Link>组件一样添加额外的参数，第一个参数映射到href，第二个参数映射到as

### 路由事件

我们还可以监听路由器内部发生的不同事件，以下是事件列表：
- routeChangeStart(url) - 路由开始切换时触发
- routeChangeComplete(url) - 完成路由切换时触发
- routeChangeError(err, url) - 路由切换报错时触发
- beforeHistoryChange(url) - 浏览器 history 模式开始切换时触发
- hashChangeStart(url) - 开始切换 hash 值但是没有切换页面路由时触发
- hashChangeComplete(url) - 完成切换 hash 值但是没有切换页面路由时触发

> 这里的url是指显示在浏览器中的 url。如果你用了Router.push(url, as)（或类似的方法），那浏览器中的 url 将会显示 as 的值。

举个栗子🌰：
```
//routeChangeStart
const handleRouteChange = url => {
  console.log('App is changing to: ', url)
}

Router.events.on('routeChangeStart', handleRouteChange)
```
如果不想长期监听该事件，可以使用off事件去取消监听
```
Router.events.off('routeChangeStart', handleRouteChange)
```
如果路由加载被取消时（比如快速连续双击链接）
```
Router.events.on('routeChangeError', (err, url) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled!`)
  }
})
```

### 浅层路由

浅层路由允许你改变 URL 但是不执行getInitialProps生命周期。你可以加载相同页面的 URL，得到更新后的路由属性pathname和query，并不失去 state 状态

你可以给Router.push 或 Router.replace方法加shallow: true参数
举个栗子🌰：
```
const href = '/?counter=10'
const as = href
Router.push(href, as, { shallow: true })
```

可以在componentdidupdate钩子函数中监听 URL 的变化
```
componentDidUpdate(prevProps) {
  const { pathname, query } = this.props.router
  // verify props have changed to avoid an infinite loop
  if (query.id !== prevProps.router.query.id) {
    // fetch data based on the new query
  }
}
```

> 注意:

> 浅层路由只作用于相同 URL 的参数改变，比如我们假定有个其他路由about，而你向下面代码样运行:

> Router.push('/?counter=10', '/about?counter=10', { shallow: true })
> 那么这将会出现新页面，即使我们加了浅层路由，但是它还是会卸载当前页，会加载新的页面并触发新页面的getInitialProps。





