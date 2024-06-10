<template>
  <div className="heading">
    <h1 className="heading__name">
      {{ song.activeSong?.author ? song.activeSong.author : "" }}
    </h1>
    <p className="heading__title">
      {{ song.activeSong?.title ? song.activeSong.title : "" }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useActiveSong } from "@/store/activeSong";

const { song } = useActiveSong();

</script>

<style scoped lang="scss">
  @import './PlayerHeading.scss';
</style>