import { watch, ref, nextTick } from 'vue';

import { useActiveSong } from '@/store/activeSong'
export interface AudioInt {
  refAudio: any,
  volume:number,
  playSong: () => void,
  pauseSong: () => void,
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

export function useAudio() {
  const { changePlaybackSong, song } = useActiveSong()

  const refAudio = ref<HTMLAudioElement>();
  const volume = ref<number>(0.1);

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

  watch(() => refAudio.value, ()=> {
    if (refAudio.value) {
      changeVolume(0.1)
    }
  }, { deep:true, immediate: true })

  watch(() => song.activeSong, () => { 
    // если трек воспроизводится, 
    // то при переключении трека/или текущий трек закончится,  
    // начнется воспроизведение
    nextTick(() => {
      if (song.isPlaySong && refAudio.value) {
        playSong() 
      }   
    })
  }, { deep:true });

  return {
    refAudio,
    volume,
    playSong,
    pauseSong,
    changeTime,
    changeVolume,
  };
}