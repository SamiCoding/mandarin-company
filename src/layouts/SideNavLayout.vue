<template>
  <div>
    <SideNav/>
    <slot></slot>
  </div>
</template>

<script>
import SideNav from '@/components/nav/SideNav.vue'

export default {
  components: {
    SideNav,
  },
}
</script>

<style>

</style>