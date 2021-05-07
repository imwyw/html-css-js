<template>
  <div v-if="list.length > 0">
    <div v-for="(item, index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" :id="index" />
        <label :for="index">{{ item.title }}</label>
        <button class="del" @click="del(item, index)">删除</button>
      </div>
    </div>
  </div>
  <div v-else>
    暂无任务
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'navMain',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['del'],
  setup(props, ctx) {
    let del = (item, index) => {
      ctx.emit('del', index)

      console.log(item)
      console.log(index)
    }
    return { del }
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
