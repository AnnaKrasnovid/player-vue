<template>
  <VGrid>
    <template #header>
      <VHint text="Добавить плейлист">
        <VButton>
          <VIconAdd />
        </VButton>
      </VHint>
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
import { watch } from "vue";
import { useRoute } from 'vue-router';

import VGrid from "../UI/VGrid/VGrid.vue";
import VButton from "@/components/UI/VButton/VButton.vue";
import VIconAdd from "@/components/UI/VIcons/VIconAdd.vue";
import VHint from "@/components/UI/VHint/VHint.vue";
import CardPlaylist from "@/components/CardPlaylist/CardPlaylist.vue";

import { usePlaylists } from "@/store/playlists";

const route = useRoute()
const { playlists } = usePlaylists()

// console.log(route.params.id)
// watch(() => route.params.id, (newId, oldId) => {
//   console.log(newId, oldId)
// })

</script>

<style lang="scss">

.playlists {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>