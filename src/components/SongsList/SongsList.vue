<template>
  <ul class="songs-list" :class="{ 'songs-list_inactive': isActive }">
    <!-- <Animation as='li' key={item.id} @change-song={() => callback(item.id)}
    elements={list.length} index={index} animationName='animation-position'
    delay={0.2} > -->
    <li v-for="item in list.songs" :key="item.id" @click="emits('change-song', item.id)">
      <Song :item="item" />
    </li>
    <!-- </Animation> -->
  </ul>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from "vue";
import Song from "@/components/Song/Song.vue";

type Props = {
  list: Array<any>; // Array<SongInt>
  isActive: boolean;
};

const props = defineProps<Props>();
const { list, isActive } = toRefs(props);
console.log("list", list.value.songs[0], props.list);
const emits = defineEmits(["change-song"]);
</script>

<style lang="scss">
@import './SongsList.scss';
</style>