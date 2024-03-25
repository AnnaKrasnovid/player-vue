<template>
	<button
		type="button"
		class="button"		
        :class="{
            'button_icon_arrows': icon ==='arrows',
            'button_icon_like': icon ==='like',
            'button_icon_next': icon ==='next',
            'button_icon_pause': icon ==='pause',
            'button_icon_prev': icon ==='prev',
            'button_icon_play': icon ==='play',
            'button_icon_volume': icon ==='volume',
        }"
		@click="emit('callback')"
	>	
    <VIconArrows v-if="icon ==='arrows'"/>
    <VIconLike v-if="icon ==='like'"/>
    <VIconPrev v-if="icon ==='next'"/>
    <VIconPause v-if="icon ==='pause'"/>
    <VIconPrev v-if="icon ==='prev'"/>
    <VIconPlay v-if="icon ==='play'"/>
    <VIconVolume v-if="icon ==='volume'"/>
	</button>
</template>

<script setup lang="ts">
import { toRefs, defineProps, defineEmits } from 'vue';
import VIconArrows from '../VIcons/VIconArrows.vue';
import VIconLike from '../VIcons/VIconLike.vue';
import VIconPause from '../VIcons/VIconPause.vue';
import VIconPlay from '../VIcons/VIconPlay.vue';
import VIconPrev from '../VIcons/VIconPrev.vue';
import VIconVolume from '../VIcons/VIconVolume.vue';

type Props = {
  icon: 'prev' | 'play' | 'pause' | 'next' | 'volume' | 'arrows',
  callback?: any
}

const props = defineProps<Props>()
const emit = defineEmits(['callback']);

const { icon } = toRefs(props)


</script>

<style scoped lang="scss">
  @import './VButtonPlayer.scss';
</style>

