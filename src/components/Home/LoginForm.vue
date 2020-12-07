<template>
  <div class="login-container">
    <img src="@/assets/transparent-logo.png" class="logo" alt="logo" />
    <form action="#" class="LoginModal">
      <div class="modal-card">
        <header class="modal-card-head LoginModal-header">
          <p class="modal-card-title ">Login</p>
        </header>
        <section class="modal-card-body">
          <BField label="Email">
            <BInput
              style="width: 300px;"
              type="email"
              :value="email"
              placeholder="Your email"
              required
            />
          </BField>

          <BField label="Password">
            <BInput
              style="width: 300px;"
              type="password"
              :value="password"
              password-reveal
              placeholder="Your password"
              required
            />
          </BField>

          <BCheckbox>Remember me</BCheckbox>
        </section>
        <footer class="modal-card-foot">
          <BButton class="button is-primary">Login</BButton>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      password: '',
      email: '',
      canCancel: ''
    }
  },
  methods: {
    log() {
      console.log('asdsadsda')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  @include flex();
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  .LoginModal {
    color: $base-font;
    box-shadow: $cardShadow;
    border-radius: 8px;
    overflow: hidden;
    width: 350px;
  }
}
</style>
