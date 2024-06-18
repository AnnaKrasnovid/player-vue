<template>
  <div class="sound">
    <span class="sound__icon" />
    <VProgress
      @callback="emits('callback', $event)"
      :currentProgress="volume"
      :allProgress="1"
    />
    <span class="sound__icon sound__icon_type_volume" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, toRefs } from "vue";

import VProgress from "@/components/UI/VProgress/VProgress.vue";

interface Props {
  volume?: number;
}

const props = withDefaults(defineProps<Props>(), {
  volume: 0.1,
});
const emits = defineEmits(["callback"]);

const { volume } = toRefs(props);

</script>

<style scoped lang="scss"> 
</style>

