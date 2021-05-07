<template>
  <div>
    <input type="text" placeholder="请输入任务名称" v-model="taskname" @keydown.enter="enter" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'navHeader',
  setup(props, ctx) {
    let taskname = ref('')
    // 回车确认
    let enter = () => {
      //console.log(taskname.value)
      // 输入框内容传递给父组件，相当于调用父组件中 @add 自定义事件
      ctx.emit('add', taskname.value)
      // 清空输入框
      taskname.value = ''
    }
    return { taskname, enter }
  }
}
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 10px;
}
</style>
