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
  .button {   
    border-radius: 50%;
    width: 64px;
    height: 64px;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
        box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.9);
        transition: all 0.1s linear;
        opacity: 1;
    }

    &_icon {
        &_prev {           
            transform: scale(-1, 1);
            opacity: 0.8;
        }

        &_play {           
            width: 70px;
            height: 70px;
        }

        &_pause {            
            width: 70px;
            height: 70px;
        }

        &_next {          
            opacity: 0.8;
        }

        &_volume {
            opacity: 0.5;
        }

        &_arrows {
            opacity: 0.5;
        }
    }
}
</style>

