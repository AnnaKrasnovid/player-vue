<template>
  <Download title="Добавить песни" type="songs" @add="addSongs"/>
</template>

<script setup lang="ts">
import { defineProps, toRefs, ref } from "vue";
import { useRoute } from 'vue-router';

import Download from "@/components/Download/Download.vue";

import { usePlaylists } from "@/store/playlists"

const route = useRoute()
const playlistsStore = usePlaylists();

console.log(route.query.playlist)

function addSongs(files) {
  // console.log(files)
  playlistsStore.addNewSongs(route.query.playlist, [files])
}

</script>

<style scoped lang="scss">
@import './DownloadSongs.scss';
</style>