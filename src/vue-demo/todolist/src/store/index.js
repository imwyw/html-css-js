import { createStore } from 'vuex'

export default createStore({
  // 所有组件中共享的数据
  state: {
    list: [
      { title: '吃饭', complete: false },
      { title: '睡觉', complete: false },
      { title: '打豆豆', complete: true }
    ]
  },
  // 同步修改 state ，各组件中应用会同步更新。内部都是方法
  mutations: {
    // 添加任务
    addTodo(state, payload) {
      state.list.push(payload)
    },
    // 删除任务
    deleteTodo(state, payload) {
      // 删除下标元素
      state.list.splice(payload, 1)
    },
    // 清除已完成
    clear(state, payload) {
      state.list = payload
    }
  },
  // 异步提交 mutation
  actions: {},
  // 模块化
  modules: {}
})
