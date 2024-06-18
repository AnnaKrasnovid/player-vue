<template>
  <div class="cover">
    <img
      :src="cover"
      alt="Пластинка"
      class="cover__img"
      :class="{ 'cover__image_active': isPlaySong }"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

type Props = {
  isPlaySong: boolean,
  cover: string
};

const props = defineProps<Props>();
const { isPlaySong, cover } = toRefs(props);
</script>

<style scoped lang="scss">
   @import './PlayerImage.scss';
</style>