<template>
  <ul v-if="options?.length" class="dropdown-select-list">
    <li
      v-for="item in options"
      :key="item.id"
      :class="[
        'dropdown-select-list__item',
        { 'dropdown-select-list__item_active': item.title === selectedItem },
      ]"
      @click="emits('choice-option', item.id)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits, withDefaults } from "vue";

type Props = {
  options: string;
  selectedItem?: string
};

const props = withDefaults(defineProps<Props>(), {
  selectedItem: '',
});

const { options, selectedItem } = toRefs(props);

const emits = defineEmits(["choice-option"]);
</script>

<style scoped lang="scss">
  @import './Options.scss';
</style>