<template>
  <div class="select-button" @click="emits('open-modal')">
    <span :class="['select-button__title', 'select-button__title-button']">
      {{ selectedItem }}
    </span>
    <span :class="['arrow', { arrow_up: isActive }]">
      <VIconArrow v-if="showArrow" :isActive="isActive" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits, withDefaults } from "vue";
import VIconArrow from '@/components/UI/VIcons/VIconArrow.vue'

type Props = {
  isActive: boolean;
  selectedItem: string;
  showArrow?: boolean
};

const props = withDefaults(defineProps<Props>(), { 
  showArrow: true,
})
const { isActive, selectedItem } = toRefs(props);

const emits = defineEmits(['open-modal']);

</script>

<style scoped lang="scss">
  @import './Select.scss';
</style>