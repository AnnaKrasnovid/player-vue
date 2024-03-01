import { defineStore } from "pinia";

import { songs } from "@/assets/appData/songs";

const initialState = {
  songs: songs,
}

export const useSongs = defineStore('songsStore', {
  state: () => ({
    songs: initialState,
  }),
  getters: {},
  actions: {
    changeSongsList(value:any) {
      this.songs = value;
    },       
  },
})