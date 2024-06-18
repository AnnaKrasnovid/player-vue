<template>
  <div class="download">
    <div class="download__box">       
      <slot/>
    </div>
    <DownloadBox @add-files="addFiles">
      <VInputDownload  @add-files="addFiles" format="audio" :name="type"/>
      <DownloadList :files="filesList" @delete-file="deleteFile" />
    </DownloadBox>
    <VButton class="button-download" @click="add" color="primary">
      {{ t('buttonAdd') }}
    </VButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, ref, defineEmits, withDefaults } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import parse from 'id3-parser';
import { convertFileToBuffer } from 'id3-parser/lib/util';

import DownloadBox from "@/components/DownloadBox/DownloadBox.vue";
import DownloadList from "@/components/DownloadList/DownloadList.vue";
import VInputDownload from "@/components/UI/VInputDownload/VInputDownload.vue";
import VButton from "@/components/UI/VButton/VButton.vue";

import { SongInt } from "@/types/types";

type Props = {
  type: "songs" | "playlist"
  isDisabledButton?: boolean
};

const emits = defineEmits(["add"]);
const props = withDefaults(defineProps<Props>(), {
  isDisabledButton: false,
});
const { type } = toRefs(props);

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const filesList = ref<Array<SongInt>>([]);

const addFiles = (filesObj: any) => {   
  filesObj.map((i)=> {       
    convertFileToBuffer(i)
      .then(parse)
      .then(tag => {
        const songs=[]
        const content = new Uint8Array(tag?.image?.data)
        const image = new Blob([content.buffer], { type: 'image/png' } )
        const  urlImg =  URL.createObjectURL(image) 
       
        if(i.type === 'audio/mpeg') {
          songs.push({
            id: i.size,
            audio: URL.createObjectURL(i),
            author: tag?.artist,
            title: tag?.title,
            cover: image.size? urlImg : null,
            type: i.type,
          }) 
        }        
          
        filesList.value = [...filesList.value, ...songs];
      })      
  })  
}

const deleteFile = (id) => {
  filesList.value = filesList.value.filter((item) => item.id !== id);
}

const add = () => {
  if (type.value === "songs") {
    router.push(`/playlist/${route.query.playlistId}`);
  } else if (type.value === 'playlist') {
    router.push(`/playlists`);
  }

  emits("add", filesList.value);
}

</script>

<style scoped lang="scss">
@import './Download.scss';
</style>