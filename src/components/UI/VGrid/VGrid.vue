<template>
  <div class="box">
    <div class="box__header">
      <slot name="header"/>
    </div>

    <div class="box__list scroll">
      <slot name="body"/>
    </div>     
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import './VGrid.scss';
</style>