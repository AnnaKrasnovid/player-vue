import { defineStore } from "pinia";

import { songs } from "@/assets/appData/songs";
import { Playlist } from "@/types/types";

const defaultPlaylists = {  
  id: '1',      
  title: 'По умолчанию',
  cover: '',
  songs: [...songs, ...songs],
}
const defaultPlaylists2 = {  
  id: '555',      
  title: 'По умолчанию 222',
  cover: '',
  songs: [...songs],
}

export const usePlaylists = defineStore('usePlaylists', {
  state: () => ({
    playlists: [defaultPlaylists, defaultPlaylists2 ],
    activePlaylists: defaultPlaylists,
  }),
  getters: {},
  actions: {
    addNewPlaylists(data: Playlist) {
      this.playlists.push({    
        id: String(Date.now()),   
        title: data.title,
        cover: data?.cover ? data.cover : '',
        songs: data.songs,
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
    // addDefaultActivePlaylist() {     
    //   //@ts-ignore
    //   this.activePlaylists = this.playlists[0]
    // },

    addNewSongs(playlistId:string, songs:any) {
      // @ts-ignore
      this.playlists.map((i)=> {
        console.log(i.id, playlistId)
        if(i.id === playlistId) {           
          i.songs.push(...songs)          
        }      
      })
    },
  },
})