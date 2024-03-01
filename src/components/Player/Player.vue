<template>
 <div class='container player'>
            <audio
                ref='refAudio'
                :src='song.activeSong?.audio'
                @loadedmetadata='getSongDuration'
                @timeupdate='updateProgress'
                @ended='nextSong'
            />
            <ImagePlayer :isPlaySong="song.isPlaySong" />
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
import Song from '../Song/Song.vue'

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
  // console.log(songs.songs[indexSong.value])
  switchSong(songs.songs[indexSong.value]);
}

watch(()=>indexSong.value, ()=> {
  // console.log(song.activeSong)
  if (song.activeSong) {
    changeActiveSong()
  }
})
// watch(()=>song.isPlaySong, ()=> {
//   console.log(song.isPlaySong)
// })

watch(()=>[indexSong.value,  song.isPlaySong], ()=> {
 
  if (song.isPlaySong) {
    // console.log('1 refAudio', song.isPlaySong, refAudio)
    // console.log('refAudio', refAudio)
    playSong();
    // console.log('2 refAudio', song.isPlaySong, refAudio)
  }
 
})

onMounted(()=> {
  console.log(songs.songs[0])
  switchSong(songs.songs[0]);
  console.log(songs.songs[0])
})
</script>

<style scoped lang="scss">
  @import './Player.scss';
</style>

