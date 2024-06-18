<template>
  <div className="audio">
    <p className="audio__time">
      {{ getCurrentTime(currentTime) }}
    </p>
    <VProgress
      @callback="emit('changeTime', $event)"
      :currentProgress="currentTime"
      :allProgress="duration"
      :point="false"
    />
    <p className="audio__time audio__time_type_duration">
      {{ getCurrentTime(duration) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from "vue";

import VProgress from "@/components/UI/VProgress/VProgress.vue";

import { getCurrentTime } from "@/helpers/getCurrentTime/getCurrentTime";

type Props = {
  currentTime: number;
  duration: number;
};
const props = defineProps<Props>();
const { currentTime, duration } = toRefs(props);

const emit = defineEmits(["changeTime"]);
</script>

<style scoped lang="scss">
  @import './PlayerTrack.scss';
</style>