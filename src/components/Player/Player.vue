<template>
 <div class='container player'>
            <!-- <audio
                ref={ref}
                src={activeSong.audio}
                onLoadedMetadata={getSongDuration}
                onTimeUpdate={updateProgress}
                onEnded={nextSong}
            /> -->
            <!-- <Image isPlaySong={isPlaySong} /> -->
            <div class='player__box' >
                <!-- <HeadingSong />
               <Like type='like' callback={() => deleteFromFavorites(activeSong.id)} />  -->
            </div>
             <Tools  @prevSong='()=> console.log("fdjhg")'  />
           <!-- <AudioTrack changeTime={changeTime} /> -->
        </div>
</template>

<script setup lang="ts">
import Tools from '@/components/Tools/Tools.vue'
</script>

<style scoped lang="scss">
  @import './Player.scss';
</style>

