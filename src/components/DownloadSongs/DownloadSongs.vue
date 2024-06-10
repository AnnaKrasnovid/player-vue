<template>
  <Download     
    type="songs" 
    @add="addSongs"
  >
    <DownloadHeader 
      :title="t('newSongs.title')" 
      type="songs" 
    />
  </Download>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import Download from "@/components/Download/Download.vue";
import DownloadHeader from "@/components/DownloadHeader/DownloadHeader.vue";

import { usePlaylists } from "@/store/playlists";
import { NewPlaylistInt } from "@/types/types";

const { t } = useI18n();
const route = useRoute();
const playlistsStore = usePlaylists();

function addSongs(files: NewPlaylistInt) {
  playlistsStore.addNewSongs(route.query.playlistId, files);
}

</script>

<style scoped lang="scss">
@import './DownloadSongs.scss';
</style>