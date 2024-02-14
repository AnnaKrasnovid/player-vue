<template>
 <div class='container player'>
            <audio
                ref='refAudio'
                :src='song.activeSong?.audio'
                @loadedmetadata='getSongDuration'
                @timeupdate='updateProgress'
                @ended='nextSong'
            />
            <ImagePlayer :isPlaySong="false" />
            <div class='player__box' >
               <PlayerHeading />
               <!--  <Like type='like' callback={() => deleteFromFavorites(activeSong.id)} />  -->
            </div>
            <Tools  
                @prevSong='prevSong'  
                @nextSong='nextSong' 
                @pauseSong='pauseSong' 
                @playSong='playSong' 
                @changeVolume='changeVolume'  
                :isPlaySong='song.isPlaySong'                
                :volume='volume'
            />
           <PlayerTrack @changeTime='changeTime'/>
        </div>
</template>

<script setup lang="ts">
import Tools from '@/components/Tools/Tools.vue'
import ImagePlayer from '@/components/PlayerImage/PlayerImage.vue'
import PlayerTrack from '@/components/PlayerTrack/PlayerTrack.vue'
import PlayerHeading from '@/components/PlayerHeading/PlayerHeading.vue'
import { useAudio } from '@/composables/useAudio'
import { useActiveSong } from '@/store/activeSong'
import { useSongs } from '@/store/songs'
import { onMounted, watch } from 'vue'

const { switchSong, getDuration, updateCurrentTime, song } = useActiveSong();
const { songs } = useSongs();

const {
  refAudio,
  // isPlaySong,
  indexSong,
  volume,
  playSong,
  pauseSong,
  prevSong,
  nextSong,
  changeTime,
  changeVolume,
} = useAudio(songs.songs);

const getSongDuration = () => {
  if (refAudio.value) {
    getDuration(refAudio.value.duration);
  }
}
const updateProgress = () => {
  updateCurrentTime(refAudio.value.currentTime)
};

const changeActiveSong = () => {
  switchSong(songs.songs[indexSong.value]);
}

watch(()=>indexSong.value, ()=> {
  console.log(song.isPlaySong)
  // if (song.isPlaySong) {
  changeActiveSong()
  // }
})
// watch(()=>song.isPlaySong, ()=> {
//   console.log(song.isPlaySong)
// })

watch(()=>[song.activeSong, song.isPlaySong], ()=> {
  console.log(song.isPlaySong)
  if (song.isPlaySong) {
    playSong();
  }
})

onMounted(()=> {
  switchSong(songs.songs[0]);
})
</script>

<style scoped lang="scss">
  @import './Player.scss';
</style>

