<template>
  <div class="container">
    <div>已完成 【{{ completed }}】 / 全部 【{{ list.length }}】</div>
    <div v-if="completed > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'navFooter',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['clear'],
  setup(props, ctx) {
    let completed = computed(() => {
      return props.list.filter(item => {
        return item.complete
      }).length
    })
    let clear = () => {
      // 过滤未完成的
      let arr = props.list.filter(item => {
        return !item.complete
      })
      ctx.emit('clear', arr)
      console.log('clear')
    }
    return { completed, clear }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
