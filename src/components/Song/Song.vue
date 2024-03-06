<template>
  <div
    class="song"
    :class="{
      'song_active': song.activeSong?.id === item.id,
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
    <SoundBar v-if="song.activeSong?.id === item.id && song.isPlaySong"/>
   
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, toRefs, watch } from "vue";
import { useActiveSong } from "@/store/activeSong";

import SoundBar from '@/components/UI/SoundBar/SoundBar.vue';
import Cover from "../../assets/images/images/cover.png";

type Props = {
  item: any;
};

const props = defineProps<Props>();
const { item } = toRefs(props);

const { song } = useActiveSong();


</script>

<style lang="scss">
   @import './Song.scss'; 
</style>