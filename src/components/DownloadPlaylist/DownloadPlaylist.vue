<template>
  <Download 
    title="Добавить плейлист" 
    type="playlist" 
    @add="addPlaylist"
  >
    <DownloadHeader 
      title="Добавить новый плейлист"
      type="playlist" 
      @add-files="addCover"
      @add-title="addTitle" 
    />
  </Download>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Download from "@/components/Download/Download.vue";
import DownloadHeader from "@/components/DownloadHeader/DownloadHeader.vue";

import { usePlaylists } from '@/store/playlists';

const { addNewPlaylists } = usePlaylists()

const titlePlaylist = ref<string>("");
const coverPlaylist = ref<string>("");

function addPlaylist(playlist) {
  const newPlaylist = {
    title: titlePlaylist.value,
    cover: coverPlaylist.value,
    songs: playlist,
  }

  addNewPlaylists(newPlaylist)
}

const addTitle = (event) => {
  titlePlaylist.value = event;
};

const addCover = (event) => {
  coverPlaylist.value = event;
};

</script>

<style scoped lang="scss">
@import './DownloadPlaylist.scss';
</style>