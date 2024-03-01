<template>
   <div className="songs "
   :class="{
    'songs_inactive': isActive
   }"
   >
        <SongsList :list="songs" @change-song="handleClickSong" :isActive="isActive" />
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from "vue";

import SongsList from '@/components/SongsList/SongsList.vue'

import { useActiveSong } from '@/store/activeSong'
import { useSongs } from '@/store/songs'

const { switchSong } = useActiveSong();
const { songs } = useSongs();
console.log('songs', songs)
interface SongInt {
  id: number,
  audio: string,
  author: string,
  title: string,
  cover?: string
}

type Props = { 
  isActive: boolean
}
const props = defineProps<Props>()
const { isActive } = toRefs(props)

const handleClickSong = (id: number) => {
  const song = songs.find((item: SongInt) => item.id === id)
  switchSong(song)
}
</script>

<style lang="scss">
    
</style>