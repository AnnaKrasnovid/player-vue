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
	</button>
</template>

<script setup lang="ts">
import { toRefs, defineProps, defineEmits, withDefaults } from 'vue';
import VIconArrowsVue from '../VIcons/VIconArrows.vue';
import VIconLike from '../VIcons/VIconLike.vue';
import VIconNext from '../VIcons/VIconNext.vue';
import VIconPause from '../VIcons/VIconPause.vue';
import VIconPlay from '../VIcons/VIconPlay.vue';
import VIconPrev from '../VIcons/VIconPrev.vue';
import VIconVolume from '../VIcons/VIconVolume.vue';

type Props = {
  icon: 'prev' | 'play' | 'pause' | 'next' | 'volume' | 'arrows',
  callback?: any
}

const props = defineProps<Props>()
const emit=defineEmits(['callback']);

const { icon } = toRefs(props)


</script>

<style scoped lang="scss">
  .button {
    // background-color: $color-primary;
    background-repeat: no-repeat;
    background-size: 28px;
    background-position: center;
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
            background-image: url(../../../assets/images/icons/rewind-back.svg);
            transform: scale(-1, 1);
            opacity: 0.8;
        }

        &_play {
            background-image: url(../../../assets/images/icons/pause-stream.svg);
            background-size: 42px;
            width: 70px;
            height: 70px;
        }

        &_pause {
            background-image: url(../../../assets/images/icons/pause.svg);
            width: 70px;
            height: 70px;
        }

        &_next {
            background-image: url(../../../assets/images/icons/rewind-back.svg);
            opacity: 0.8;
        }

        &_volume {
            background-image: url(../../../assets/images/icons/volume-loud.svg);
            background-size: 24px;
            opacity: 0.5;
        }

        &_arrows {
            background-image: url(../../../assets/images/icons/arrows.svg);
            background-size: 30px;
            opacity: 0.5;
        }
    }
}
</style>

