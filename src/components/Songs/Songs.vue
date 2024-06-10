<template>
  <VGrid>
    <template #header>
      <div class="songs">
        <p class="songs__title">{{ songs?.title }}</p>
        <div class="songs__box">
          <VButton color="primary" @callback="playActivePlaylist">{{ t('listen') }}</VButton>
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
        @change-song="handleClickSong"
        :isActive="isActive"
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

const { t } = useI18n()
const route = useRoute();
const { switchSong } = useActiveSong();
const playlistsStore = usePlaylists();

const changeActivePlaylist=()=> {
  // если композиция не из этого альбома, меняем плейлист
  if (route.params.id !== playlistsStore.activePlaylists.id) {
    playlistsStore.changeActivePlaylist(route.params.id);
  }
}

const playActivePlaylist=()=> {
  changeActivePlaylist()
  switchSong(playlistsStore.activePlaylists.songs[0]);
}

const handleClickSong = (id: number) => {
  changeActivePlaylist()

  const song = playlistsStore.activePlaylists.songs.find(
    (item: SongInt) => item.id === id,
  );

  switchSong(song);
};

</script>

<style scoped lang="scss">
.songs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__title {
font-size: 18px;
  }

  &__box{
display: flex;
align-items: center;
gap: 16px;
  }
}

.link-add {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  background: rgba(0, 0, 0, .25);
    border: var(--border);
    padding: 6px;
    
    border-radius: 6px;
}
</style>