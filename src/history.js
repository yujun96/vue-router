import { BaseRouter } from './base.js'

export class HistoryRouter extends BaseRouter {
  constructor(list) {
    super(list)
    this.handle()
    // 监听hash的变化
    window.addEventListener('popstate', e => {
      this.handle()
    })
  }
  handle() {
    this.render(this.getState())
  }
  //使用pushState方法实现压入功能
  //PushState不会触发popstate事件,所以需要手动调用渲染函数
  getState() {
    const state = window.location.state
    return state ? state : '/'
  }
  push(path) {
    history.pushState(null, null, path)
    this.handle()
  }
  replace(path) {
    history.replaceState(null, null, path)
    this.handle()
  }
  go(n) {
    window.history.go(n)
  }
}
