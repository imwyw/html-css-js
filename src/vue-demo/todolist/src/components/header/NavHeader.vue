<template>
  <div>
    <input type="text" placeholder="请输入任务名称" v-model="value" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'navHeader',
  setup() {
    let value = ref('')
    return { value }
  }
}
</script>

<style lang="scss" scoped></style>
