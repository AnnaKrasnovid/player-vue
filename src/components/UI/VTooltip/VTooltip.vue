<template>
  <div
    ref="refElement"
    :class="[
      'tooltip',
      {
        'tooltip_active': isOpen,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

type Props = {
  isOpen: boolean;
  refElement?: any;
};

const props = defineProps<Props>();
const { isOpen, refElement } = toRefs(props);

</script>

<style scoped lang="scss">
  @import './VTooltip.scss';
</style>
