<template>
  <div>
    <!-- 父组件接收子组件参数 -->
    <nav-header @add="add"></nav-header>
    <!-- 父组件传参给子组件 -->
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/header/NavHeader'
import NavMain from '@/components/main/NavMain'
import NavFooter from '@/components/footer/NavFooter'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'Home',
  components: { NavHeader, NavMain, NavFooter },
  setup(props, ctx) {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })

    // 子组件传递过来的参数
    let add = val => {
      // 防止重复添加
      let repeat = false
      list.value.map(item => {
        if (item.title === val) {
          repeat = true
          alert('任务已存在')
        }
      })
      if (!repeat) {
        store.commit('addTodo', {
          title: val,
          complete: false
        })
      }
    }
    let del = ind => {
      store.commit('deleteTodo', ind)
    }
    let clear = arr => {
      store.commit('clear', arr)
    }
    return { list, add, del, clear }
  }
}
</script>

<style lang="scss" scoped></style>
