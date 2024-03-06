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
    <VButtonPlayer icon="volume" @callback="() => console.log('openModal')" />
    <!-- <Tooltip isOpen={isActive} refElement={ref}>
                <Sound callback={changeVolume} />
            </Tooltip> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";
import VButtonPlayer from "@/components/UI/VButtonPlayer/VButtonPlayer.vue";
interface Props {
  isPlaySong: boolean;
  //   volume?: number
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
  //   volume?: 0.5,
});
</script>

<style scoped lang="scss">
  @import './Tools.scss';
</style>

