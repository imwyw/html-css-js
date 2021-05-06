<template>
  <div v-for="(item, index) in list" :key="index">
    <div>
      <input type="checkbox" v-model="item.complete" />
      {{ item.title }}
      <button>删除</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'navMain',
  setup() {
    let list = ref([
      { title: '吃饭', complete: false },
      { title: '睡觉', complete: false },
      { title: '打豆豆', complete: false }
    ])
    return { list }
  }
}
</script>

<style lang="scss" scoped></style>
