<template>
  <div>
    <NavBar />
    <div class="UserProfile">
      <div class="UserProfile-box">
        <h1 class="greeting">
          Welcome
          <span class="username">User!</span>
        </h1>
        <p>Here you can see your information details</p>
        <div class="data">
          <span>
            <b>name:</b>
            Mr. Robot
          </span>
          <span>
            <b>Bought tickets:</b>
            5
          </span>
          <span>
            <b>Email:</b>
            mrrobot@email.com
          </span>
        </div>
        <div class="triangle-shape" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar'

export default {
  name: 'UserProfile',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.UserProfile {
  height: calc(100vh - 92px);

  @include flex();
  &-box {
    background-color: white;
    margin-top: 40px;
    border-radius: 10px;
    @include flex();
    flex-direction: column;
    justify-content: flex-start;
    width: 600px;
    height: 500px;
    box-shadow: $cardShadow;
    .greeting {
      color: $base-font;
      font-size: 45px;
      margin-top: 50px;
      margin-bottom: 25px;
    }
    p {
      font-style: italic;
    }

    .data {
      height: 200px;
      @include flex();
      flex-direction: column;
      align-items: flex-start;
      span {
        margin: 5px;
      }
    }

    .triangle-shape {
      width: 500px;
      height: 0;
      border-bottom: 700px solid $primary;
      border-left: 1400px solid transparent;
      position: absolute;
      bottom: 0px;
      right: 0px;
      z-index: -1;
    }
  }
}

@media screen and (max-width: 690px) {
  .UserProfile {
    &-box {
      width: 400px;
    }
  }
}

@media screen and (max-width: 415px) {
  .UserProfile {
    &-box {
      width: 310px;
      height: 400px;
      .greeting {
        font-size: 30px;
      }
    }
  }
}

@media screen and (max-width: 321px) {
  .UserProfile {
    background: none;
    &-box {
      width: 310px;
      height: 400px;
      box-shadow: none;
      .greeting {
        font-size: 30px;
      }
    }
  }
}
</style>
