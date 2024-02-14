<template>
    <div className='audio'>
            <p className='audio__time'>
                {{getCurrentTime(song.currentTime)}}
            </p>
            <VProgress
                @callback='emit("changeTime", $event)'
                :currentProgress='song.currentTime'
                :allProgress='song.duration'
                :point='false'
            />
            <p className='audio__time audio__time_type_duration'>
                {{getTime(song.duration)}}
            </p>
        </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

import VProgress from '@/components/UI/VProgress/VProgress.vue'
import { getTime } from '@/helpers/getTime/getTime';
import { getCurrentTime } from '@/helpers/getCurrentTime/getCurrentTime';
import { useActiveSong } from '@/store/activeSong'

const { song } = useActiveSong();

const emit = defineEmits(['changeTime'])
</script>

<style scoped lang="scss">
  @import './PlayerTrack.scss';
</style>