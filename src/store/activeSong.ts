import { defineStore } from "pinia";

const initialState = {
  activeSong: null,
  duration: 0,
  currentTime: 0,
  isPlaySong:false,
}

export const useActiveSong = defineStore('songStore', {
  state: () => ({
    song: initialState,
  }),
  getters: {},
  actions: {
    switchSong(value:any) {
      // console.log('value', value)
      this.song.activeSong = value;
    },
    getDuration(value:any) {
      this.song.duration = value;
    },
    updateCurrentTime(value:any) {
      this.song.currentTime = value;
    },
    changePlaybackSong(value:any) {
      this.song.isPlaySong = value;
    //   console.log(action.payload.isPlaySong)
    },
  },
})