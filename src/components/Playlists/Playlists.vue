<template>
  <VGrid>
    <template #header>
      <!-- <VHint text="Добавить плейлист"> -->
        <RouterLink :to="'/playlists/add'">
          <VIconAdd />
        </RouterLink>
      <!-- </VHint> -->
    </template>

    <template #body>
      <!-- плейлист -->
      <ul class="playlists">
        <li 
          v-for="playlist  in playlists"  
          :key="playlist.id" class="playlists__item"
        >
          <RouterLink :to="`playlist/${playlist.id}`">
            <CardPlaylist :playlist="playlist" />
          </RouterLink>
        </li>       
      </ul>
    </template>
  </VGrid>
</template>

<script setup lang="ts">
import VGrid from "../UI/VGrid/VGrid.vue";
import VIconAdd from "@/components/UI/VIcons/VIconAdd.vue";
import VHint from "@/components/UI/VHint/VHint.vue";
import CardPlaylist from "@/components/CardPlaylist/CardPlaylist.vue";

import { usePlaylists } from "@/store/playlists";

const { playlists } = usePlaylists()

</script>

<style lang="scss">
@import "./Playlists.scss";
</style>