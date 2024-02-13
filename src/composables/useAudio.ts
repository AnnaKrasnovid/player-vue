import { watch, ref } from 'vue';

export interface AudioInt {
  refAudio: any,
  indexSong: number,
  isPlaySong: boolean,
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
  const refAudio = ref<HTMLAudioElement>();
  //   const { changePlaybackSong } = useActions();
  //   const [indexSong, setIndexSong] = useState<number>(0);
  const indexSong = ref<number>(0);
  const isPlaySong = ref<boolean>(false);
  const volume = ref<number>(0.5);
  //   const [isPlaySong, setIsPlaySong] = useState<boolean>(false);
  //   const [volume, setVolume] = useState<number>(0.5);

  const prevSong = () => {
    if (indexSong.value === 0) {
    //   setIndexSong(songs.length - 1);
      indexSong.value = songs.length - 1
    } else {
    //   setIndexSong(prev => prev - 1);
      indexSong.value = indexSong.value - 1
    }
  }

  const nextSong = () => {
    if (indexSong.value === songs.length - 1) {
    //   setIndexSong(0);
      indexSong.value = 0
    } else {
    //   setIndexSong(prev => prev + 1);
      indexSong.value = indexSong.value +1
    }
  }

  const playSong = () => {
    if (refAudio.value) {
      refAudio.value.play();
      //   setIsPlaySong(true);
      isPlaySong.value = true
    //   changePlaybackSong({ isPlaySong: true });
    }
  }

  const pauseSong = () => {
    if (refAudio.value) {
      refAudio.value.pause();
      //   setIsPlaySong(false);
      isPlaySong.value = false
    //   changePlaybackSong({ isPlaySong: false });           
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
      //   setVolume(volume);
      volume.value  = vol
    }
  }

  watch(refAudio, ()=> {
    if (refAudio.value) {
    //   changeVolume(volume);
      volume.value  = 0.5
    }
  })

  return {
    refAudio,
    indexSong,
    isPlaySong,
    volume,
    playSong,
    pauseSong,
    prevSong,
    nextSong,
    changeTime,
    changeVolume,
  };
}