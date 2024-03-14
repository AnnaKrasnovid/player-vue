<template>
  <div class="sound">
    <span class="sound__icon" />
    <VProgress
      @callback="emits('callback', $event)"
      :currentProgress="0.5"
      :allProgress="1"
    />
    <span class="sound__icon sound__icon_type_volume" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

import VProgress from "@/components/UI/VProgress/VProgress.vue";

const emits = defineEmits(["callback"]);
</script>

<style scoped lang="scss">
  
</style>

