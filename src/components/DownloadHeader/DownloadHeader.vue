<template>
  <div class="add-playlist">
    <div class="add-playlist__image">
      <!-- доработать картинку -->
        <img  :src="coverPlaylist? coverPlaylist : Img"/>
      <VInputDownload
        v-if="type === 'playlist'"
        format="image"
        @add-files="addCover"
        name="cover"
        className="cover-download"
      >
        <VIconAdd />
      </VInputDownload>
    </div>
    <div class="add-playlist__box">
      <h2 class="title">
        {{ title }}
        <br/>
        <span v-if="type === 'songs'" class="download__span">"{{ playlist?.title}}"</span>
      </h2>

      <div v-if="type === 'playlist'" class="download__inputs">
        <VInput
          @change-input="emits('add-title', $event)"
          placeholder="Введите название альбома"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, ref, defineEmits, onMounted, computed, watch } from "vue";
import { useRoute } from 'vue-router';

import VInputDownload from "@/components/UI/VInputDownload/VInputDownload.vue";
import VInput from "@/components/UI/VInput/VInput.vue";
import VIconAdd from "../UI/VIcons/VIconAdd.vue";
import Img from "@/assets/images/images/cover.png";

import { usePlaylists } from "@/store/playlists"

interface Props  {
  title: string;
  type: "songs" | "playlist";
}

const emits = defineEmits(["add-title", "add-files"]);
const props = defineProps<Props>();
const { title, type } = toRefs(props);

const route = useRoute()
const { playlists } = usePlaylists();

const playlist = ref()
const coverPlaylist = ref<string>("");

const addCover = (cover) => {
  coverPlaylist.value = URL.createObjectURL(cover[0]);
  emits('add-files', coverPlaylist.value)
};

function getCover() {
  if(type.value === 'songs'){
    playlist.value = playlists.filter(item=> item.id === route.query.playlistId)[0]
    coverPlaylist.value = playlist.value.cover  
  }  
  if(type === 'playlist') {
    coverPlaylist.value = Img
  }
}

onMounted(()=> {
  getCover()
})
</script>

<style scoped lang="scss">
  @import './DownloadHeader.scss';
</style>
