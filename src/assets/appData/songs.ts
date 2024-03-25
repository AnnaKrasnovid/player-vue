//@ts-ignore
import AudioOne from '@/assets/audio/adventure.mp3';
//@ts-ignore
import AudioTwo from '@/assets/audio/allthat.mp3';
//@ts-ignore
import AudioThree from '@/assets/audio/elevate.mp3';
//@ts-ignore
import AudioFour from '@/assets/audio/Rammstein_-_Du_Hast_63121920.mp3';
//@ts-ignore
import Img from '../images/covers/adele.jpg'

// import { SongInt } from '../../types/SongInt';

export const songs: Array<any> = [  
  {
    id: 1,
    audio: AudioOne,
    author: 'Benjamin Tissot',
    title: 'Adventure',
    cover: Img,
  },
  {
    id: 2,
    audio: AudioTwo,
    author: 'Benjamin Tissot',
    title: 'Allthat',
    cover: '',
  },
  {
    id: 3,
    audio: AudioThree,
    author: 'Benjamin Tissot',
    title: 'Elevate',
    cover: '',
  },
  {
    id: 4,
    audio: AudioFour,
    author: 'Rammstein',
    title: 'Du Hast',
    cover: '',
  },
]

// export const songs_two: Array<SongInt> = [  
//     {
//         id: 1,
//         audio: AudioOne,
//         author: 'Benjamin Tissot',
//         title: 'Adventure',
//         cover: Img
//     },    
// ]