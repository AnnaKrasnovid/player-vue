<template>
<label htmlFor='file' class='label' >
    Выбрать файл
  <input
    type="file"
    id="file"
    accept="audio/*"
    @change="handleChange"
    multiple
    class="input"
  />
  </label>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(['add-files']);

function handleChange(e) {
  const filesObj = Object.values(e.target.files);
  emit('add-files', filesObj)
}
</script>

<style scoped lang="scss">
  @import './VInputDownload.scss';
</style>