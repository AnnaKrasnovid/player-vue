export interface Playlist {
  id: string | number,      
  title: string,
  cover?: string,
  songs?: any,
}

export interface NewPlaylistInt {
  files: Array<any>, 
  title: string, 
}

export interface SongInt {
  id: number | string,
  audio: string,
  author: string,
  title: string,
  cover: string,
}