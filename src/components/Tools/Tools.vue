<template>
  <div class="tools">
    <VButtonPlayer icon="arrows" @callback="emit('prevSong')" />
    <div class="tools__switches">
      <VButtonPlayer icon="prev" @callback="emit('prevSong')" />
      <VButtonPlayer
        :icon="isPlaySong ? 'pause' : 'play'"
        @callback="isPlaySong ? emit('pauseSong') : emit('playSong')"
      />
      <VButtonPlayer icon="next" @callback="emit('nextSong')" />
    </div>
    <VButtonPlayer icon="volume" @callback="openModal" />
    <VTooltip :isOpen="isActive" :refElement="refElement">
      <PlayerSound @callback="emit('changeVolume', $event)" />
    </VTooltip>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, ref, toRefs, watch } from "vue";

import PlayerSound from '@/components/PlayerSound/PlayerSound.vue'; 
import VButtonPlayer from "@/components/UI/VButtonPlayer/VButtonPlayer.vue";
import VTooltip from "@/components/UI/VTooltip/VTooltip.vue";

import { useToggleVisibility } from '@/composables/useToggleVisibility'

interface Props {
  isPlaySong: boolean;
  volume?: number
}

const emit = defineEmits([
  "prevSong",
  "nextSong",
  "pauseSong",
  "playSong",
  "changeVolume",
]);

const props = withDefaults(defineProps<Props>(), {
  isPlaySong: false,
  volume: 0.5,
});
const { isPlaySong, volume } = toRefs(props);

const { refElement, isActive, openModal, closeModal } = useToggleVisibility(false);

watch(()=> volume.value, ()=> {
  const timer = setTimeout(() => closeModal(), 500);
  return () => clearTimeout(timer);
})
</script>

<style scoped lang="scss">
  @import './Tools.scss';
</style>

