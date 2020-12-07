<template>
  <div class="login-container">
    <img src="@/assets/transparent-logo.png" class="logo" alt="logo" />
    <div class="LoginModal">
      <div class="modal-card">
        <header class="modal-card-head LoginModal-header">
          <p class="modal-card-title ">Login</p>
        </header>
        <section class="modal-card-body">
          <BField label="Email">
            <BInput
              class="form-inputs"
              type="email"
              :value="email"
              placeholder="Your email"
              required
            />
          </BField>

          <BField label="Password">
            <BInput
              class="form-inputs"
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
          <BButton class="button is-primary" @click="login">Login</BButton>
        </footer>
      </div>
    </div>
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
    login() {
      this.$router.push('/profile')
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
    .modal-card {
      .modal-card-body {
        .field {
          width: 300px;
        }
      }
    }
  }
}

@media screen and (max-width: 930px) {
  .login-container {
    justify-content: center;
    .logo {
      margin-bottom: 30px;
      width: 156px;
      height: 41px;
    }
  }

  @media screen and (max-width: 825px) {
    .login-container {
      .LoginModal {
        width: 300px;
        .modal-card {
          .modal-card-body {
            .field {
              width: 260px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 775px) {
    .login-container {
      .LoginModal {
        .modal-card {
          margin-left: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 321px) {
  .login-container {
    .LoginModal {
      width: 280px;
      .modal-card {
        .modal-card-body {
          .field {
            width: 250px;
          }
        }
      }
    }
  }
}
</style>
