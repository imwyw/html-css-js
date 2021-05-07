<template>
  <div>
    <input type="text" placeholder="请输入任务名称" v-model="taskname" @keydown.enter="enter" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'navHeader',
  setup() {
    let taskname = ref('')
    // 回车确认
    let enter = () => {
      console.log(taskname.value)
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
