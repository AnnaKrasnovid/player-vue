<template>
  <VGrid>
    <template #header>
      <div class="songs">
        <p class="songs__title">{{ songs?.title }}</p>
        <div class="songs__box">
          <!-- <VButton color="primary" @callback="playActivePlaylist">
            {{ t('listen') }}
          </VButton> -->
          <VHint :text="t('hintAddSongs')">
            <RouterLink
              :to="{ path: '/songs/add', query: { playlistId: songs?.id } }"
              class="link-add"
            >
              <VIconAdd />
            </RouterLink>
          </VHint>
        </div>
      </div>
    </template>

    <template #body>
      <SongsList
        :list="songs?.songs"
        :isActive="isActive"
        @change-song="handleClickSong"
        @delete="deleteSong"
      />
    </template>
  </VGrid>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import VGrid from "../UI/VGrid/VGrid.vue";
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
  isActive?: boolean;
  songs: any;
};

const props = defineProps<Props>();
const { isActive, songs } = toRefs(props);

const { t } = useI18n();
const route = useRoute();
const { switchSong } = useActiveSong();
const playlistsStore = usePlaylists();

const changeActivePlaylist= () => {
  // если композиция не из этого альбома, меняем плейлист
  if (route.params.id !== playlistsStore.activePlaylists.id) {
    playlistsStore.changeActivePlaylist(route.params.id);
  }
}

const playActivePlaylist= () => {
  changeActivePlaylist()
  switchSong(playlistsStore.activePlaylists.songs[0]);
}

const handleClickSong = (id: number) => {
  changeActivePlaylist()

  const song = playlistsStore.activePlaylists.songs.find(
    (item: SongInt) => item.id === id,
  );
  
  switchSong(song);
}

const deleteSong = (idSong) => {
  playlistsStore.deleteSong(route.params.id, idSong)
}

</script>

<style scoped lang="scss">
@import './Songs.scss'; 
</style>