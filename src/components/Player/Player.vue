<template>
 <div class='container player'>
            <!-- <audio
                ref={ref}
                src={activeSong.audio}
                onLoadedMetadata={getSongDuration}
                onTimeUpdate={updateProgress}
                onEnded={nextSong}
            /> -->
            <ImagePlayer :isPlaySong="false" />
            <div class='player__box' >
                <!-- <HeadingSong />
               <Like type='like' callback={() => deleteFromFavorites(activeSong.id)} />  -->
            </div>
            <Tools  
                @prevSong='()=> console.log("prevSong")'  
                @nextSong='()=> console.log("nextSong")' 
                @pauseSong='()=> console.log("pauseSong")' 
                @playSong='()=> console.log("playSong")' 
                @changeVolume='()=> console.log("changeVolume")'  
            />
           <PlayerTrack changeTime={changeTime} />
        </div>
</template>

<script setup lang="ts">
import Tools from '@/components/Tools/Tools.vue'
import ImagePlayer from '@/components/PlayerImage/PlayerImage.vue'
import PlayerTrack from '@/components/PlayerTrack/PlayerTrack.vue'
</script>

<style scoped lang="scss">
  @import './Player.scss';
</style>

