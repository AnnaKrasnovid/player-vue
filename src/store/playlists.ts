import { defineStore } from "pinia";

import { songs, songs2 } from "@/assets/appData/songs";
import { Playlist, SongInt } from "@/types/types";
//@ts-ignore
import Img from "@/assets/images/images/bg.png";

const defaultPlaylists = {  
  id: '1',      
  title: 'По умолчанию',
  cover: Img,
  songs: [...songs],
}
const defaultPlaylists2 = {  
  id: '555',      
  title: 'По умолчанию 222',
  cover: '',
  songs: [...songs2],
}

export const usePlaylists = defineStore('usePlaylists', {
  state: () => ({
    playlists: [defaultPlaylists, defaultPlaylists2 ],
    activePlaylists: defaultPlaylists,
  }),
  getters: {},
  actions: {
    addNewPlaylists(data: Playlist) {
      const newPlaylist = {    
        id: String(Date.now()),   
        title: data.title,
        cover: data?.cover ? data.cover : '',
        songs: data.songs,
      }

      this.playlists.push(newPlaylist);
    },  
    deletePlaylist(id: string) {
      this.playlists = this.playlists.filter(i => i.id !== id)
      console.log(this.playlists)
    },
    changeActivePlaylist(id: string) {
      // @ts-ignore
      this.activePlaylists = this.playlists.filter(i => i.id === id)[0]
      console.log('changeActivePlaylist', this.activePlaylists)
    },
    // addDefaultActivePlaylist() {     
    //   //@ts-ignore
    //   this.activePlaylists = this.playlists[0]
    // },

    addNewSongs(playlistId: string, songs: Array<SongInt>) { 
      this.playlists.map((i)=> {
        if(i.id === playlistId) {           
          i.songs.push(...songs)          
        }      
      })
      // console.log('this.playlists', this.playlists)
    },
  },
})