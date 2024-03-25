import { defineStore } from "pinia";

import { songs } from "@/assets/appData/songs";

export const useSongs = defineStore('songsStore', {
  state: () => ({
    songs: songs,
  }),
  getters: {},
  actions: {
    changeSongsList(value:any) {
      this.songs = value;
    },       
  },
})