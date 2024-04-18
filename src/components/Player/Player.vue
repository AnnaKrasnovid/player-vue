<template>
  <div class="container player">
    <audio
      ref="refAudio"
      :src="song.activeSong?.audio"
      @loadedmetadata="getSongDuration"
      @timeupdate="updateProgress"
      @ended="nextSong"
    />
    <ImagePlayer :isPlaySong="song.isPlaySong" />
    <div class="player__box">
      <PlayerHeading />
      <!--  <Like type='like' callback={() => deleteFromFavorites(activeSong.id)} />  -->
    </div>
    <Tools
      @prevSong="prevSong"
      @nextSong="nextSong"
      @pauseSong="pauseSong"
      @playSong="playSong"
      @changeVolume="changeVolume"
      :isPlaySong="song.isPlaySong"
      :volume="volume"
    />
    <PlayerTrack @changeTime="changeTime" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";

import Tools from "@/components/Tools/Tools.vue";
import ImagePlayer from "@/components/PlayerImage/PlayerImage.vue";
import PlayerTrack from "@/components/PlayerTrack/PlayerTrack.vue";
import PlayerHeading from "@/components/PlayerHeading/PlayerHeading.vue";

import { useAudio } from "@/composables/useAudio";
import { useActiveSong } from "@/store/activeSong";
// import { useSongs } from "@/store/songs";
import { usePlaylists } from "@/store/playlists";


const { switchSong, getDuration, updateCurrentTime, song } = useActiveSong();
// const { songs } = useSongs();
const playlistsStore = usePlaylists();
// const {playlists, activePlaylists, } = usePlaylists();
const {
  refAudio,
  indexSong,
  volume,
  playSong,
  pauseSong,
  prevSong,
  nextSong,
  changeTime,
  changeVolume,
} = useAudio(playlistsStore.activePlaylists.songs);


const getSongDuration = () => {
  if (refAudio.value) {
    getDuration(refAudio.value.duration);
  }
};

const updateProgress = () => {
  updateCurrentTime(refAudio.value.currentTime);
};

const changeActiveSong = () => {
  switchSong(playlistsStore.activePlaylists.songs[indexSong.value]);
};

watch(() => indexSong.value, () => {
  if (song.activeSong) {
    changeActiveSong();
  }
});

watch(() => [indexSong.value, song.isPlaySong], () => {
  if (song.isPlaySong) {
    playSong();
  }
});

onMounted(() => { 
  // playlistsStore.addDefaultActivePlaylist()
  switchSong(playlistsStore.activePlaylists?.songs[0]);
  console.log(playlistsStore.activePlaylists?.songs[0])
});
</script>

<style scoped lang="scss">
  @import './Player.scss';
</style>

