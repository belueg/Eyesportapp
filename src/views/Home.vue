<template>
  <div class="Home">
    <div class="Home-Hero-Container">
      <Hero class="Hero" />
    </div>
    <div class="Home-Login-Container">
      <LoginForm class="LoginForm" />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero.vue'
import LoginForm from '@/components/Home/LoginForm.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.Home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &-Hero-Container,
  &-Login-Container {
    width: 50%;
    height: 100vh;
    @include flex();
  }
  &-Hero-Container {
    background-color: $primary;
    position: relative;
  }
}
</style>
