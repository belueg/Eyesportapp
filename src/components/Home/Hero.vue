<template>
  <div class="Hero">
    <div class="Hero-promotion">
      <h1 class="Hero-title">
        Ticketing
        <br />
        <span class="Hero-title-yellow">made easy</span>
      </h1>
      <div class="social-media">
        <div class="icon-container">
          <a
            class="icon-link"
            href="https://twitter.com/eyesportapp"
            target="_blank"
          >
            <BIcon icon="twitter" />
          </a>
        </div>
        <div class="icon-container">
          <a
            class="icon-link"
            href="https://instagram.com/eyesportapp"
            target="_blank"
          >
            <BIcon icon="instagram" />
          </a>
        </div>

        <h6 class="social-media-url">/eyesportapp</h6>
      </div>
      <img src="@/assets/eyesport-robot.jpg" class="img-robot" alt="robot" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {}
}
</script>

<style lang="scss" scoped>
.Hero {
  background-color: $primary;
  color: white;
  &-title {
    font-size: 80px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 650;
    line-height: 60px;
    margin-bottom: 10px;
    &-yellow {
      color: $secondary;
    }
  }
  &-promotion {
    .social-media {
      height: 70px;
      @include flex();
      &-url {
        font-size: 20px;
        margin-left: 20px;
      }
      .icon-container {
        border: 2px solid white;
        border-radius: 50%;
        padding: 5px 8px;
        margin-left: 10px;
      }
    }
  }
  .img-robot {
    width: 291px;
    height: 354px;
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
}
</style>
