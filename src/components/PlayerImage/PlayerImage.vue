<template>
  <div class="cover">
    <img
      :src="ImagePlayer"
      alt="Пластинка"
      class="cover__img"
      :class="{ cover__image_active: isPlaySong }"
    />
    <!-- activeSong.cover ? activeSong.cover : ImagePlayer -->
  </div>
</template>

<script setup lang="ts">
import ImagePlayer from "../../assets/images/images/cover.png";

type Props = {
  isPlaySong: boolean;
  activeSong: any; // из стора
};
</script>

<style scoped lang="scss">
   @import './PlayerImage.scss';
</style>