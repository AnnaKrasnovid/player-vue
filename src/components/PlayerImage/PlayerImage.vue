<template>
  <div class="cover">
    <img
      :src="song.activeSong?.cover ? song.activeSong.cover : ImagePlayer"
      alt="Пластинка"
      class="cover__img"
      :class="{ 'cover__image_active': isPlaySong }"
    />
    <!-- activeSong.cover ? activeSong.cover : ImagePlayer -->
  </div>
</template>

<script setup lang="ts">
import ImagePlayer from "../../assets/images/images/cover.png";

import { useActiveSong } from "@/store/activeSong";

type Props = {
  isPlaySong: boolean
};

const { song } = useActiveSong();

</script>

<style scoped lang="scss">
   @import './PlayerImage.scss';
</style>