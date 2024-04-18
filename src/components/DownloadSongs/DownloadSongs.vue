<template>
  <Download     
    type="songs" 
    @add="addSongs"
  >
    <DownloadHeader 
      title="Добавить песни в альбом :" 
      type="songs" 
    />
  </Download>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import Download from "@/components/Download/Download.vue";
import DownloadHeader from "@/components/DownloadHeader/DownloadHeader.vue";

import { usePlaylists } from "@/store/playlists"
import { NewPlaylistInt } from '@/types/types';

const route = useRoute()
const playlistsStore = usePlaylists();

function addSongs(files: NewPlaylistInt) {
  playlistsStore.addNewSongs(route.query.playlistId, files)
}

</script>

<style scoped lang="scss">
@import './DownloadSongs.scss';
</style>