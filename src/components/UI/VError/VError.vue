<template>
  <p class="error">{{ error }}</p>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

type Props = {
  error: string;
};

const props = defineProps<Props>();
const { error } = toRefs(props);
</script>

<style scoped lang="scss">
  @import './VError.scss';
</style>