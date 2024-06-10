<template>
  <button
    :type="type"
    :class="[
      'button',
      {
        [`button_size_${size}`]: size,
        [`button_color_${color}`]: color,
        [className]: className,
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
  className?: string;
  disabled: boolean;
  color?: string;
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "middle",
  className: "",
  disabled: false,
  color: '',
});
const emit = defineEmits(["callback"]);

const { type, size, disabled, className } = toRefs(props);
</script>

<style scoped lang="scss">
@import "./VButton.scss";
</style>