<template>
<label htmlFor='file' class='label' >
    Выбрать файл
  <input
    type="file"
    id="file"
    accept="audio/*"
    @change="emit('handle-change', $event)"
    multiple
    class="input"
  />
  </label>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits, withDefaults } from "vue";

// type Props = {
//   type: string;
//   selectedItem: string;
//   showArrow?: boolean
// };

// const props = defineProps<Props>();
const emit = defineEmits(['handle-change']);
</script>

<style scoped lang="scss">
  @import './InputDownload.scss';

  .input {
    display: none;
  }

  .label {
 display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 16px;
        gap: 10px;
        min-width: 143px;
        height: 50px;
        // background: $color-black;
        // border: 1px solid $color-middle-green;
        border-radius: 5px;
        // color: $color-middle-green;
        cursor: pointer;
        font-size: 18px;
        line-height: 26px;
  }
</style>