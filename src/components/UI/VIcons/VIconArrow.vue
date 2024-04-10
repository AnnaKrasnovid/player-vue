<template>
  <svg
    :class="['arrow', { 'arrow_active': isActive }]"
    width="22"
    height="22"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path d="M18.5 9L12.5 15L6.5 9" stroke="#fff" strokeWidth="2" />
  </svg>
</template>

<script setup lang="ts">
import {  defineProps, toRefs } from "vue";

interface Props {
  isActive: boolean,
}

const props = defineProps<Props>()
const { isActive } = toRefs(props);
</script>

<style scoped lang="scss">
.arrow {
    transition: transform 0.5s ease;

    &_active {
        transform: rotate(180deg);
        transition: transform 0.5s ease;
    }
}
</style>