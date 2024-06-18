import { defineStore } from "pinia";

import { songs } from "@/assets/appData/songs";
import { Playlist, SongInt } from "@/types/types";
//@ts-ignore
import Cover from "@/assets/images/covers/cover3.jpg";

const defaultPlaylists = {
  id: "1",
  title: "По умолчанию",
  cover: Cover,
  songs: [...songs],
};

export const usePlaylists = defineStore("usePlaylists", {
  state: () => ({
    playlists: [defaultPlaylists],
    activePlaylists: defaultPlaylists,
  }),
  getters: {
    
  },
  actions: {
    addNewPlaylists(data: Playlist) {
      const newPlaylist = {
        id: String(Date.now()),
        title: data.title,
        cover: data?.cover ? data.cover : Cover,
        songs: data.songs,
      };

      this.playlists.push(newPlaylist);
    },
    deletePlaylist(id: string) {
      this.playlists = this.playlists.filter((i) => i.id !== id);
      // console.log(this.playlists);
    },
    changeActivePlaylist(id: string) {
      // @ts-ignore
      this.activePlaylists = this.playlists.filter((i) => i.id === id)[0];     
    },
    // addDefaultActivePlaylist() {
    //   //@ts-ignore
    //   this.activePlaylists = this.playlists[0]
    // },

    addNewSongs(playlistId: string, songs: Array<SongInt>) {
      this.playlists.map((i) => {
        if (i.id === playlistId) { 
          i.songs.push(...songs);
        }
      });
    },
    deleteSong(idPlaylist: string | number, idSong: string | number) {
      const playlists = this.playlists.find((i) => i.id === idPlaylist);
      // @ts-ignore
      playlists.songs = playlists?.songs.filter((i) => i.id !== idSong);      
    },

  },
});
