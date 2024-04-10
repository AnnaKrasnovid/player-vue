import { watch, ref } from 'vue';

import { useActiveSong } from '@/store/activeSong'

export interface AudioInt {
  refAudio: any,
  indexSong: number,
  // isPlaySong: boolean,
  volume:number,
  playSong: () => void,
  pauseSong: () => void,
  prevSong: () => void,
  nextSong: () => void,
  changeVolume: (seconds: number) => void,
  changeTime: (volume: number) => void,
}

export interface SongInt {
  id: number,
  audio: string,
  author: string,
  title: string,
  cover?: string
}

export function useAudio(songs: Array<SongInt>) {
  const { changePlaybackSong } = useActiveSong()
  
  const refAudio = ref<HTMLAudioElement>();
  const indexSong = ref<number>(0);
  const volume = ref<number>(0.1);

  const prevSong = () => {
    if (indexSong.value === 0) {
      indexSong.value = songs.length - 1
    } else {
      indexSong.value = indexSong.value - 1
    }
  }

  const nextSong = () => {    
    if (indexSong.value === songs.length - 1) {
      indexSong.value = 0
    } else {
      indexSong.value = indexSong.value +1
    }    
    // console.log(indexSong.value)
  }

  const playSong = () => {
    if (refAudio.value) {     
      refAudio.value?.play();
      changePlaybackSong(true);
    }
  }

  const pauseSong = () => {
    if (refAudio.value) {        
      refAudio.value.pause();
      changePlaybackSong(false);              
    }
  }

  const changeTime = (seconds: number) => {
    if (refAudio.value) {
      refAudio.value.currentTime = seconds;
    }
  }

  const changeVolume = (vol: number) => {
    if (refAudio.value) {
      refAudio.value.volume = vol;
      volume.value  = vol
    }
  }

  watch(refAudio, ()=> {
    if (refAudio.value) {
      volume.value  = 0.1
    }
  }, { deep:true, immediate: true })

  return {
    refAudio,
    indexSong,
    // isPlaySong,
    volume,
    playSong,
    pauseSong,
    prevSong,
    nextSong,
    changeTime,
    changeVolume,
  };
}