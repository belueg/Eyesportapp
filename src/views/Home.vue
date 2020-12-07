<template>
  <div class="Home">
    <div class="Home-Hero-Container">
      <Hero class="Hero" />
    </div>
    <div class="Home-Login-Container">
      <LoginForm class="LoginForm" />
      <div class="Home-triangle" />
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
  overflow: hidden;
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

@media screen and(max-width:699px) {
  .Home {
    &-Hero-Container {
      display: none;
    }
    &-Login-Container {
      width: 100%;
    }
    &-triangle {
      width: 500px;
      height: 0;
      border-bottom: 800px solid $primary;
      border-left: 800px solid transparent;
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      z-index: -1;
    }
  }
}
</style>
