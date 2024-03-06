<template>
  <div
    className="songs "
    :class="{
      songs_inactive: isActive,
    }"
  >
    <SongsList
      :list="songs"
      @change-song="handleClickSong"
      :isActive="isActive"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from "vue";

import SongsList from "@/components/SongsList/SongsList.vue";

import { useActiveSong } from "@/store/activeSong";
import { useSongs } from "@/store/songs";

interface SongInt {
  id: number;
  audio: string;
  author: string;
  title: string;
  cover?: string;
}

type Props = {
  isActive: boolean;
};
const props = defineProps<Props>();
const { isActive } = toRefs(props);

const { switchSong } = useActiveSong();
const { songs } = useSongs();

const handleClickSong = (id: number) => {
  const song = songs.songs.find((item: SongInt) => item.id === id);
  switchSong(song);
};
</script>

<style lang="scss">
    
</style>