<template>
  <div class="card-playlist">
    <div class="card-playlist__img">
        <img :src="playlist?.cover ? playlist.cover : Cover" />
    </div>
    <h2 class="card-playlist__title">
        {{ playlist?.title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

import Cover from "@/assets/images/images/cover.png";
import { Playlist } from "@/types/types";

type Props = {
  playlist: Playlist
};

const props = defineProps<Props>();
const { playlist } = toRefs(props);
</script>

<style lang="scss">
@import './CardPlaylist.scss';
</style>