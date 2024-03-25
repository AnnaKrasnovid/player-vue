<template>
  <div class="box">

    <div class="box__header">
      <VHint text="Добавить песни">
        <VButton>
          <VIconAdd />
        </VButton>
      </VHint>
    </div>

    <div class="box__list scroll">
      <SongsList
        :list="playlistsStore.activePlaylists?.songs"
        @change-song="handleClickSong"
        :isActive="isActive"
      />
    </div>
     
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

import SongsList from "@/components/SongsList/SongsList.vue";
import VButton from "@/components/UI/VButton/VButton.vue";
import VIconAdd from "@/components/UI/VIcons/VIconAdd.vue";
import VHint from "@/components/UI/VHint/VHint.vue";

import { useActiveSong } from "@/store/activeSong";
import { usePlaylists } from "@/store/playlists";

interface SongInt {
  id: number;
  audio: string;
  author: string;
  title: string;
  cover?: string;
}

type Props = {
  isActive: boolean;
};
const props = defineProps<Props>();
const { isActive } = toRefs(props);

const { switchSong } = useActiveSong();
const playlistsStore = usePlaylists();

const handleClickSong = (id: number) => {
  const song = playlistsStore.activePlaylists.songs.find(
    (item: SongInt) => item.id === id,
  );
  switchSong(song);
};
</script>

<style lang="scss">
.box {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content fit-content;
 
  flex-direction: column;
  gap: 16px;

  &__list  {
    overflow: auto;
     max-height: calc(100% - 200px); //подумать !!!
  }
}
    .box__header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
    }

   
</style>