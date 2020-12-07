<template>
  <div class="NavBar">
    <img src="@/assets/transparent-logo.png" class="logo" alt="logo" />

    <ul class="NavBar-list">
      <li>
        username
      </li>
      <li>
        <RouterLink to="/">
          <BIcon icon="logout" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.NavBar {
  background: white;
  box-shadow: -5px -2px 15px 0px rgb(132 130 130 / 37%);
  padding: 5px 20px;
  width: 100%;
  @include flex();
  justify-content: space-between;
  &-list {
    display: flex;
    li {
      margin-right: 20px;
      font-weight: bold;
      &:last-child {
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 690px) {
  .NavBar {
    height: 80px;
    .logo {
      width: 156px;
      height: 41px;
    }
  }
}

@media screen and (max-width: 361px) {
  .NavBar {
    .logo {
      width: 120px;
      height: 31px;
    }
  }
}
@media screen and (max-width: 321px) {
  .NavBar {
    &-list {
      font-size: 13px;
    }
  }
}
</style>
