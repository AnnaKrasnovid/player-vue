<template>
    <div className='audio'>
            <p className='audio__time'>
                {{getCurrentTime(currentTime)}}
            </p>
            <VProgress
                @callback='changeTime'
                :currentProgress='currentTime'
                :allProgress='duration'
                :point='false'
            />
            <p className='audio__time audio__time_type_duration'>
                {{getTime(duration)}}
            </p>
        </div>
</template>

<script setup lang="ts">
import VProgress from '@/components/UI/VProgress/VProgress.vue'
import { getTime } from '@/helpers/getTime/getTime';
import { getCurrentTime } from '@/helpers/getCurrentTime/getCurrentTime';
//const { duration, currentTime } = useSelector((state: any) => state.activeSong);

const currentTime = 160;
const duration = 356;

</script>

<style scoped lang="scss">
  @import './PlayerTrack.scss';
</style>