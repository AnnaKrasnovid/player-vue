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
    </div>
    <Tools
      @prevSong="prevSong"
      @nextSong="nextSong"
      @pauseSong="pauseSong"
      @playSong="playSong"
      @changeVolume="changeVolume"
      @playRandomSong="toggleRandom"
      :isPlaySong="song.isPlaySong"
      :volume="volume"
      :isRandom="isRandom"
    />
    <PlayerTrack @changeTime="changeTime" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from "vue";

import Tools from "@/components/Tools/Tools.vue";
import ImagePlayer from "@/components/PlayerImage/PlayerImage.vue";
import PlayerTrack from "@/components/PlayerTrack/PlayerTrack.vue";
import PlayerHeading from "@/components/PlayerHeading/PlayerHeading.vue";

import { useAudio } from "@/composables/useAudio";
import { useActiveSong } from "@/store/activeSong";
import { usePlaylists } from "@/store/playlists";
import { getRandomNumber } from "@/helpers/getRandomNumber/getRandomNumber";

const {
  refAudio,
  volume,
  playSong,
  pauseSong,
  changeTime,
  changeVolume,
} = useAudio();
const { switchSong, getDuration, updateCurrentTime, song } = useActiveSong();
const playlistsStore = usePlaylists();

const indexSong = ref<number>(0);
const isRandom = ref<boolean>(false);

const prevSong = () => {
  if(isRandom.value) {
    playRandomSong();
    return;
  }

  if (indexSong.value === 0) {
    indexSong.value = playlistsStore.activePlaylists.songs.length - 1;
  } else {
    indexSong.value = indexSong.value - 1;
  }
}

const nextSong = () => {  
  if(isRandom.value) {
    playRandomSong();
    return;
  }  
  if (indexSong.value === playlistsStore.activePlaylists.songs.length - 1) {
    indexSong.value = 0;
  } else {
    indexSong.value = indexSong.value + 1;
  }
}

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

const toggleRandom =()=> {
  isRandom.value = !isRandom.value
}

const playRandomSong =()=> { 
  indexSong.value = getRandomNumber(playlistsStore.activePlaylists.songs.length);  
}

watch(() => indexSong.value, () => {
  if (song.activeSong) {
    changeActiveSong();
  }
});

onMounted(() => { 
  // playlistsStore.addDefaultActivePlaylist()
  switchSong(playlistsStore.activePlaylists?.songs[0]);
});

</script>

<style scoped lang="scss">
  @import './Player.scss';
</style>

