<template>
  <div>
    <div>已完成 {{ completed }} / 全部 {{ all }}</div>
    <div v-if="completed > 0">清除已完成</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'navFooter',
  setup() {
    let completed = ref(1)
    let all = ref(3)
    return { completed, all }
  }
}
</script>

<style lang="scss" scoped></style>
