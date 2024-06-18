<template>
  <div :class="['song', { song_active: song.activeSong?.id === item.id }]">
    <div class="song__img">
      <img
        :src="cover"
        :alt="`Изображение к '${item.title}', ${item.author}`"
      />
    </div>
    <div class="song__info">
      <h2 class="song__title">{{ item.author }}</h2>
      <p class="song__text">{{ item.title }}</p>
    </div>
    <div class="song__box">
      <VSoundBar v-if="song.activeSong?.id === item.id && song.isPlaySong" />
      <VButton className="song__button" @callback="emit('delete', item.id)">
        <VIconDelete />
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits, computed } from "vue";
import { useRoute } from "vue-router";

import VSoundBar from "@/components/UI/VSoundBar/VSoundBar.vue";
import VButton from "@/components/UI/VButton/VButton.vue";
import VIconDelete from "@/components/UI/VIcons/IconDelete.vue";

import { usePlaylists } from "@/store/playlists";
import { useActiveSong } from "@/store/activeSong";
import { SongInt } from "@/types/types";

type Props = {
  item: SongInt;
};

const emit = defineEmits(["delete"]);
const props = defineProps<Props>();
const { item } = toRefs(props);

const route = useRoute();
const { song } = useActiveSong();
const { playlists } = usePlaylists();

const cover = computed(() => {
  return item.value.cover
    ? item.value.cover
    : playlists.find((i) => i.id === route.params.id)?.cover;
});

</script>

<style lang="scss">
@import './Song.scss'; 
</style>