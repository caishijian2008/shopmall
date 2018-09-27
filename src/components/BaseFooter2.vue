<template>
  <footer class="other">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'otherfooter'
}
</script>

<style lang="scss" scoped>
.other {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.25rem;
  line-height: 3.25rem;
  text-align: center;
  width: 100%;
  background: #f4f4f4;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
</style>
