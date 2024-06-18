//@ts-ignore
import AudioOne from '@/assets/audio/adventure.mp3';
//@ts-ignore
import AudioTwo from '@/assets/audio/allthat.mp3';
//@ts-ignore
import AudioThree from '@/assets/audio/elevate.mp3';
//@ts-ignore
import Cover1 from '../images/covers/cover1.jpg'
//@ts-ignore
import Cover2 from '../images/covers/cover2.jpg'

export const songs: Array<any> = [  
  {
    id: 1,
    audio: AudioOne,
    author: 'Benjamin Tissot',
    title: 'Adventure',
    cover: Cover1,
  },
  {
    id: 2,
    audio: AudioTwo,
    author: 'Benjamin Tissot',
    title: 'Allthat',
    cover: Cover2,
  },
  {
    id: 3,
    audio: AudioThree,
    author: 'Benjamin Tissot',
    title: 'Elevate',
    cover: Cover2,
  },  
]