<template>
  <VGrid>
    <template #header>
      <!-- <VHint text="Добавить песни"> -->
        <RouterLink :to="{ path: '/songs/add', query: { playlist: songs.id } }">
          <VIconAdd />
        </RouterLink>
      <!-- </VHint> -->
    </template>

    <template #body>
      <SongsList
        :list="songs?.songs"
        @change-song="handleClickSong"
        :isActive="isActive"
      />
    </template>     
 </VGrid>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

import VGrid from "../UI/VGrid/VGrid.vue";
import SongsList from "@/components/SongsList/SongsList.vue";
import VButton from "@/components/UI/VButton/VButton.vue";
import VIconAdd from "@/components/UI/VIcons/VIconAdd.vue";
import VHint from "@/components/UI/VHint/VHint.vue";

import { useActiveSong } from "@/store/activeSong";
import { usePlaylists } from "@/store/playlists";


interface SongInt {
  id: number;
  audio: string;
  author: string;
  title: string;
  cover?: string;
}

type Props = {
  isActive?: boolean;
  songs: any
};

const props = defineProps<Props>();
const { isActive, songs } = toRefs(props);

const { switchSong } = useActiveSong();
const playlistsStore = usePlaylists();
console.log(songs)
const handleClickSong = (id: number) => {
  const song = playlistsStore.activePlaylists.songs.find(
    (item: SongInt) => item.id === id,
  );
  switchSong(song);
};



</script>

<style lang="scss">

</style>