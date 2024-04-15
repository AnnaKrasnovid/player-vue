<template>
  <button
    :type="type"
    :class="[
      'button',
      {
        [`button_size_${size}`]: size,
        [className]: className
      },
    ]"
    :disabled="disabled"
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
  className?: string, 
  disabled: boolean,
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "middle",
  className: '',
  disabled: false,
});
const emit = defineEmits(["callback"]);

const { type, size, disabled, className } = toRefs(props);
</script>

<style scoped lang="scss">
@import "./VButton.scss";
</style>