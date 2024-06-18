<template>
  <ul class="songs-list" :class="{ 'songs-list_inactive': isActive }">
    <Animation
      v-for="(item, index) in list"
      :key="item.id"
      :elements="list.length"
      :index="index"
      :delay="0.2"
      tag="li"
      animationName="animation-position"
      @callback="changeSong(item.id)"
    >
      <Song :item="item" @delete="emits('delete', item.id)" />
    </Animation>
  </ul>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from "vue";

import Song from "@/components/Song/Song.vue";
import Animation from "@/components/UI/Animation/Animation.vue";

type Props = {
  list: Array<any>; // Array<SongInt>
  isActive: boolean;
};

const props = defineProps<Props>();
const { list, isActive } = toRefs(props);

const emits = defineEmits(["change-song", "delete"]);

const changeSong = (id) => {
  emits("change-song", id);
}
</script>

<style lang="scss">
@import './SongsList.scss';
</style>