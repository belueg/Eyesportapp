<template>
  <div id="app">
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@import '~bulma/sass/utilities/_all';

// color palette customization
$primary: #3850f2;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
  (
    'white': (
      $white,
      $black
    ),
    'black': (
      $black,
      $white
    ),
    'light': (
      $light,
      $light-invert
    ),
    'dark': (
      $dark,
      $dark-invert
    ),
    'primary': (
      $primary,
      $primary-invert,
      $primary-light,
      $primary-dark
    ),
    'link': (
      $link,
      $link-invert,
      $link-light,
      $link-dark
    ),
    'info': (
      $info,
      $info-invert,
      $info-light,
      $info-dark
    ),
    'success': (
      $success,
      $success-invert,
      $success-light,
      $success-dark
    ),
    'warning': (
      $warning,
      $warning-invert,
      $warning-light,
      $warning-dark
    ),
    'danger': (
      $danger,
      $danger-invert,
      $danger-light,
      $danger-dark
    )
  ),
  $custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
