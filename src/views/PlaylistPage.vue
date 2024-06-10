<template> 
  <Songs  :songs="songsList" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

import Songs from "@/components/Songs/Songs.vue";

import { usePlaylists } from "@/store/playlists";

const route = useRoute()
const playlistsStore = usePlaylists();
const songsList = ref(null)

watch(()=> route.params.id, ()=> {
  songsList.value = playlistsStore.playlists.filter((item)=> item.id === route.params.id)[0]
  // console.log('songsList.value', route)
}, { immediate: true, deep: true })

</script>

<style scoped lang="scss">
</style>
