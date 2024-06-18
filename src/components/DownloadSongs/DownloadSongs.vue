<template>
  <Download 
    type="songs"
    @add="addSongs"
  >
    <DownloadHeader
      type="songs"
      :title="t('newSongs.title')"
      :list="playlistsStore.playlists"
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

const addSongs = (files: NewPlaylistInt) => {
  playlistsStore.addNewSongs(route.query.playlistId, files);
}

</script>

<style scoped lang="scss">
@import './DownloadSongs.scss';
</style>