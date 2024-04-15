<template>
  <div class="download">
    <div class="download__box">
      <h2 class="download__title">
         {{ title }}
      </h2>
      <VInput v-if="type === 'playlist'" @change-input="addTitle" />
    </div>

    <DownloadBox @add-files="addFiles">
      <VInputDownload @add-files="addFiles" />
      <DownloadList :files="filesList"/>
    </DownloadBox>

    <VButton class="button-download" @click="add" :disabled="disabledButton"> 
      Добавить 
    </VButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, ref, defineEmits, computed, watch } from "vue";
import VInputDownload from "@/components/UI/VInputDownload/VInputDownload.vue";
import DownloadBox from "@/components/DownloadBox/DownloadBox.vue";
import DownloadList from "@/components/DownloadList/DownloadList.vue";
import VButton from "@/components/UI/VButton/VButton.vue";
import VInput from "@/components/UI/VInput/VInput.vue";

type Props = {
  type: "songs" | "playlist";
  title: string;
};

const props = defineProps<Props>();
const { type, title } = toRefs(props);
const emits = defineEmits(["add"]);

const filesList = ref<Array<any>>([]);
const titlePlaylist = ref<string>('');
const disabledButton = ref<boolean>(true);

function addFiles(files: any) {
  filesList.value = [...filesList.value, ...files];
}

const addTitle = (e) => {
  titlePlaylist.value = e
};

function add() {
  const newPlaylist = { 
    files: filesList.value, 
    title: titlePlaylist.value, 
  }
  // console.log(newPlaylist)
  emits('add', newPlaylist)
}

watch(()=> [titlePlaylist.value, filesList.value], ()=> {
  if (type === 'playlist' && titlePlaylist.value.length === 0) {
    disabledButton.value = true   
  } else if(type === 'songs' && filesList.value.length > 0) {
    disabledButton.value = true
  } else {
    disabledButton.value = false
  }
})
</script>

<style scoped lang="scss">
@import './Download.scss';

.download {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content  1fr min-content;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  gap: 32px;

  &__title {
    font-size: 24px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.button-download {
  justify-self: end;
}
</style>