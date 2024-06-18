<template>
  <VGrid>
    <template #header>
      <VHint :text="t('hintAddPlaylists')">
        <RouterLink to="/playlists/add" class="link-add">
          <VIconAdd />
        </RouterLink>
      </VHint>
    </template>

    <template #body>
      <!-- плейлистЫ -->
      <ul class="playlists">
        <li
          v-for="playlist in playlists"
          :key="playlist.id"
          class="playlists__item"
        >
          <CardPlaylist :playlist="playlist" @delete="deleteList" />
        </li>
      </ul>
    </template>
  </VGrid>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import VGrid from "../UI/VGrid/VGrid.vue";
import VIconAdd from "@/components/UI/VIcons/VIconAdd.vue";
import VHint from "@/components/UI/VHint/VHint.vue";
import CardPlaylist from "@/components/CardPlaylist/CardPlaylist.vue";

import { usePlaylists } from "@/store/playlists";
import { ref, watch } from "vue";

const { t } = useI18n();
const { playlists, deletePlaylist } = usePlaylists();
const idPlaylist = ref<number | string | null>(null);

const deleteList = (id) => {
  idPlaylist.value = id;
};

watch(
  () => idPlaylist.value,
  () => {
    deletePlaylist(idPlaylist.value);
    idPlaylist.value = null;
  },
  { deep: true },
);
</script>

<style lang="scss">
@import "./Playlists.scss";
</style>