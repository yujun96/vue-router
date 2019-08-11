import { BaseRouter } from './base'
export class HashRouter extends BaseRouter {
  constructor(list) {
    super(list)
    this.handle()
    // 监听hash的变化
    window.addEventListener('hashchange', e => {
      this.handle()
    })
  }
  // 调用父类的render方法，传递hash
  handle() {
    this.render(this.getState())
  }
  // 拿到当前的hash,不需要#
  getState() {
    const hash = window.location.hash
    return hash ? hash.slice(1) : '/'
  }
  push(path) {
    // 改变了hash
    window.location.hash = path
  }
  go(n) {
    window.history.go(n)
  }
  replace(path) {
    window.location.replace(this.getUrl(path))
  }
  getUrl(path) {
    // 拿到当前的路径
    const href = window.location.href
    // 判断其中是否含有#
    const i = href.indexOf('#')
    // 如果有，截取前面的部分，并拼接,如果没有
    const base = i >= 0 ? href.slice(0, i) : href
    return `${base}#${path}`
  }
}
