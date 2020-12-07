<template>
  <BButton :customClass="customClass" rounded @click="$emit('click', $event)">
    <BIcon :icon="icon" />
  </BButton>
</template>

<script>
/**
 * @param {string} icon - Valid Material Design Icon
 * @param {string} customClass - Either custom class for button styling or Buefy class
 * */
export default {
  name: 'Icon',
  props: { icon: String, customClass: String }
}
</script>
