<template>
  <div class="tools">
    <VButtonPlayer 
      icon="arrows" 
      :isActive="isRandom"
      @callback="emit('playRandomSong')" 
    />
    <div class="tools__switches">
      <VButtonPlayer 
        icon="prev" 
        @callback="emit('prevSong')" 
      />
      <VButtonPlayer
        :icon="isPlaySong ? 'pause' : 'play'"
        @callback="isPlaySong ? emit('pauseSong') : emit('playSong')"
      />
      <VButtonPlayer 
        icon="next" 
        @callback="emit('nextSong')" 
      />
    </div>
    <VButtonPlayer 
      icon="volume" 
      @callback="openModal" 
    />
    <VTooltip 
      :isOpen="isActive" 
      :refElement="refElement"
    >
      <PlayerSound :volume="volume" @callback="emit('changeVolume', $event)" />
    </VTooltip>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  withDefaults,
  toRefs,
  watch,
} from "vue";

import PlayerSound from "@/components/PlayerSound/PlayerSound.vue";
import VButtonPlayer from "@/components/UI/VButtonPlayer/VButtonPlayer.vue";
import VTooltip from "@/components/UI/VTooltip/VTooltip.vue";

import { useToggleVisibility } from "@/composables/useToggleVisibility";

interface Props {
  isPlaySong: boolean;
  volume?: number;
  isRandom?: boolean
}

const emit = defineEmits([
  "prevSong",
  "nextSong",
  "pauseSong",
  "playSong",
  "changeVolume",
  'playRandomSong',
]);

const props = withDefaults(defineProps<Props>(), {
  isPlaySong: false,
  volume: 0.1,
  isRandom: false,
});

const { isPlaySong, volume, isRandom } = toRefs(props);
const { refElement, isActive,  openModal, closeModal } = useToggleVisibility(false);

watch(
  () => volume.value,
  () => {
    const timer = setTimeout(() => closeModal(), 1000);
    return () => clearTimeout(timer);
  },
);

</script>

<style scoped lang="scss">
  @import './Tools.scss';
</style>

