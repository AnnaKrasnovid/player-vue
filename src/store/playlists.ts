import { defineStore } from "pinia";

import { songs } from "@/assets/appData/songs";

const defaultPlaylists = {  
  id: '1',      
  title: 'По умолчанию',
  songs: [...songs, ...songs],
}

export const usePlaylists = defineStore('usePlaylists', {
  state: () => ({
    playlists: [defaultPlaylists ],
    activePlaylists: null,
  }),
  getters: {},
  actions: {
    addNewPlaylists(title: string, songs: Array<any>) {
      this.playlists.push({    
        id: String(Date.now()),   
        title: title,
        songs: songs,
      });
    },  
    deletePlaylist(id: string) {
      this.playlists = this.playlists.filter(i => i.id !== id)
    },
    changeActivePlaylist(id: string) {
      // @ts-ignore
      this.activePlaylists = this.playlists.filter(i => i.id === id)[0]
      console.log(this.activePlaylists)
    },
    addDefaultActivePlaylist() {     
      //@ts-ignore
      this.activePlaylists = this.playlists[0]
    },
  },
})