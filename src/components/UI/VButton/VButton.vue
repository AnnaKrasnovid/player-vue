<template>
  <button
    :type="type"
    :class="[
      'button',
      {
        [`button_size_${size}`]: size,
      },
    ]"
    @click="emit('callback')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { toRefs, defineProps, defineEmits, withDefaults } from "vue";

type Props = {
  type?: "button" | "submit";
  size?: "small" | "middle" | "large";
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "middle",
});
const emit = defineEmits(["callback"]);

const { type, size } = toRefs(props);
</script>

<style scoped lang="scss">
@import "./VButton.scss";
</style>