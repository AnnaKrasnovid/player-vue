<template>
  <div class="add-playlist">
    <div class="add-playlist__image">
      <img :src="coverPlaylist ? coverPlaylist : Cover" />
      <VInputDownload
        v-if="type === 'playlist'"
        format="image"
        name="cover"
        className="cover-download"
        @add-files="addCover"
      >
        <VIconAdd />
      </VInputDownload>
    </div>
    <div class="add-playlist__box">
      <h2 class="title">
        {{ title }}
        <br />
        <span v-if="type === 'songs'" class="download__span"
          >"{{ playlist?.title }}"</span
        >
      </h2>

      <div v-if="type === 'playlist'" class="download__inputs">
        <VInput
          @change-input="emits('add-title', $event)"
          :placeholder="t('addNewPlaylist.placeholder')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, ref, defineEmits, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import VInputDownload from "@/components/UI/VInputDownload/VInputDownload.vue";
import VInput from "@/components/UI/VInput/VInput.vue";
import VIconAdd from "../UI/VIcons/VIconAdd.vue";
import Cover from "@/assets/images/covers/cover3.jpg";

interface Props {
  title: string;
  type: "songs" | "playlist";
  list: any;
}

const emits = defineEmits(["add-title", "add-files"]);
const props = defineProps<Props>();

const { title, type, list } = toRefs(props);

const { t } = useI18n();
const route = useRoute();

const playlist = ref();
const coverPlaylist = ref<string>("");

const addCover = (cover) => {
  coverPlaylist.value = URL.createObjectURL(cover[0]);
  emits("add-files", coverPlaylist.value);
};

const getCover = () => {
  if (type.value === "songs") {
    playlist.value = list.value.filter(
      (item) => item.id === route.query.playlistId,
    )[0];
    coverPlaylist.value = playlist.value?.cover;
  }
  if (type === "playlist") {
    coverPlaylist.value = Cover;
  }
}

onMounted(() => {
  getCover();
});
</script>

<style scoped lang="scss">
  @import './DownloadHeader.scss';
</style>
