<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/header/NavHeader'
import NavMain from '@/components/main/NavMain'
import NavFooter from '@/components/footer/NavFooter'

export default {
  name: 'Home',
  components: { NavHeader, NavMain, NavFooter },
  setup() {}
}
NavFooter
</script>

<style lang="scss" scoped></style>
