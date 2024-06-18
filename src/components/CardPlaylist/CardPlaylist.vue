<template>
  <div class="card-playlist">
    <RouterLink :to="`playlist/${playlist.id}`">
      <div class="card-playlist__img">
        <img :src="playlist?.cover"/>
      </div>
    </RouterLink>
    <div class="card-playlist__box">
      <h2 class="card-playlist__title">
        {{ playlist?.title}}
      </h2>
      <!-- <VButton
        className="card-playlist__button"
        @callback="emit('delete', playlist.id)"
      >
        <VIconDelete />
      </VButton> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from "vue";

import VButton from "@/components/UI/VButton/VButton.vue";
import VIconDelete from "@/components/UI/VIcons/IconDelete.vue";

import { Playlist } from "@/types/types";

type Props = {
  playlist: Playlist;
};

const props = defineProps<Props>();
const emit = defineEmits(["delete"]);

const { playlist } = toRefs(props);

</script>

<style lang="scss" >
@import './CardPlaylist.scss';
</style>