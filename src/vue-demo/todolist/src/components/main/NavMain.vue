<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete" />
      {{ item.title }}
      <button class="del" @click="del(item, index)">删除</button>
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
    let del = (item, index) => {
      console.log(item)
      console.log(index)
    }
    return { list, del }
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 160px;
  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    cursor: pointer;
    z-index: 99;
  }
  &:hover {
    background-color: #ddd;
    button {
      display: block;
    }
  }
}
</style>
