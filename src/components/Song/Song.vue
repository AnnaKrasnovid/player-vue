<template>
  <div
    class="song"
    :class="{
      song_active: activeSong?.id === item.id,
    }"
  >
    <div class="song__img">
      <img
        :src="item.cover ? item.cover : Cover"
        :alt="`Изображение к '${item.title}', ${item.author}`"
      />
    </div>
    <div class="song__info">
      <h2 class="song__title">{{ item.author }}</h2>
      <p class="song__text">{{ item.title }}</p>
    </div>
    <!-- {{activeSong.id === item.id && isPlaySong && <SoundBar />}}  -->
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from "vue";
import { useActiveSong } from "@/store/activeSong";
import Cover from "../../assets/images/images/cover.png";

const { activeSong, isPlaySong } = useActiveSong();

type Props = {
  item: any;
};
const props = defineProps<Props>();
const { item } = toRefs(props);
</script>

<style lang="scss">
   @import './Song.scss'; 
</style>