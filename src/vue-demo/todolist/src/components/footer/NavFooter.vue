<template>
  <div class="container">
    <div>已完成 {{ completed }} / 全部 {{ all }}</div>
    <div v-if="completed > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'navFooter',
  setup() {
    let completed = ref(1)
    let all = ref(3)
    let clear = () => {
      console.log('clear')
    }
    return { completed, all, clear }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
