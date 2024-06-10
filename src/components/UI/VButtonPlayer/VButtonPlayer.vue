<template>
  <button
    type="button"
    class="button-player"
    :class="{
      'button-player_icon_arrows': icon === 'arrows',
      'button-player_icon_like': icon === 'like',
      'button-player_icon_next': icon === 'next',
      'button-player_icon_pause': icon === 'pause',
      'button-player_icon_prev': icon === 'prev',
      'button-player_icon_play': icon === 'play',
      'button-player_icon_volume': icon === 'volume',
      'button-player_active': isActive
    }"
    @click="emit('callback')"
  >
    <VIconArrows v-if="icon === 'arrows'" />
    <VIconLike v-if="icon === 'like'" />
    <VIconPrev v-if="icon === 'next'" />
    <VIconPause v-if="icon === 'pause'" />
    <VIconPrev v-if="icon === 'prev'" />
    <VIconPlay v-if="icon === 'play'" />
    <VIconVolume v-if="icon === 'volume'" />
  </button>
</template>

<script setup lang="ts">
import { toRefs, defineProps, defineEmits, withDefaults } from "vue";

import VIconArrows from "../VIcons/VIconArrows.vue";
import VIconLike from "../VIcons/VIconLike.vue";
import VIconPause from "../VIcons/VIconPause.vue";
import VIconPlay from "../VIcons/VIconPlay.vue";
import VIconPrev from "../VIcons/VIconPrev.vue";
import VIconVolume from "../VIcons/VIconVolume.vue";

type Props = {
  icon: "prev" | "play" | "pause" | "next" | "volume" | "arrows";
  callback?: any;
  isActive?: boolean,
};

const emit = defineEmits(["callback"]);
const props = withDefaults(defineProps<Props>(), {
  isActive: false,
});

const { icon, isActive } = toRefs(props);
</script>

<style scoped lang="scss">
  @import './VButtonPlayer.scss';
</style>

