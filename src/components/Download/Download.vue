<template>
  <div class="download">
    <div class="download__box">       
      <slot/>
    </div>
    <DownloadBox @add-files="addFiles">
      <VInputDownload  @add-files="addFiles" format="audio" :name="type"/>
      <DownloadList :files="filesList" @delete-file="deleteFile" />
    </DownloadBox>
    <!-- :disabled="isDisabledButton" -->
    <VButton class="button-download" @click="add" >
      Добавить
    </VButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, ref, defineEmits, withDefaults } from "vue";
import { useRouter, useRoute } from "vue-router";

import DownloadBox from "@/components/DownloadBox/DownloadBox.vue";
import DownloadList from "@/components/DownloadList/DownloadList.vue";
import VInputDownload from "@/components/UI/VInputDownload/VInputDownload.vue";
import VButton from "@/components/UI/VButton/VButton.vue";

import { SongInt } from "@/types/types";

type Props = {
  type: "songs" | "playlist"; 
  isDisabledButton?: boolean
};

const emits = defineEmits(["add"]);
const props = withDefaults(defineProps<Props>(), {
  isDisabledButton: false,
});
const { type } = toRefs(props);

const route = useRoute();
const router = useRouter();

const filesList = ref<Array<SongInt>>([]);

function getInfoFromAudio(name: string) {
  // TODO: не корректно отрабатывает
  let author: string;
  let title: string;

  const string = name.replace(/_/g, " ");
  const array = string.split(" - ");

  author = array[0];
  const titleArray = array[1].split(" ");
  title = titleArray.slice(0, titleArray[1].length - 2).join(" ");

  return { author, title };
}

function getSongs(files) {
  const newFiles = [];

  files.map((item) => {
    const info = getInfoFromAudio(item.name);

    newFiles.push({
      id: item.size,
      audio: URL.createObjectURL(item),
      author: info.author,
      title: info.title,
      cover: "",
    });
  });

  return newFiles;
}

function addFiles(files: any) {
  const newFiles: Array<SongInt> = getSongs(files);
  console.log(files)
  filesList.value = [...filesList.value, ...newFiles];
}

function deleteFile(id) {
  filesList.value = filesList.value.filter((item) => item.id !== id);
}

function add() {
  emits("add", filesList.value);

  if (type.value === "songs") {
    router.push(`/playlist/${route.query.playlistId}`);
  }
}

// function disabledButton() {
//   if (type === "playlist" && titlePlaylist.value.length === 0) {
//     isDisabledButton.value = true;
//   } else if (type === "songs" && filesList.value.length > 0) {
//     isDisabledButton.value = true;
//   } else {
//     isDisabledButton.value = false;
//   }
// }

// watch(
//   () => [titlePlaylist.value, filesList.value],
//   () => {
//     disabledButton();
//   },
// );
</script>

<style scoped lang="scss">
@import './Download.scss';
</style>