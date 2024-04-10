<template>
  <div class="hint-box">
    <div class="hint">
        {{ text }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs } from "vue";

type Props = {
  text: string;
};

const props = defineProps<Props>();
const { text } = toRefs(props);
</script>

<style scoped lang="scss">
  @import './VHint.scss';
</style>