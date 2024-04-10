<template>
<p>Добавить {{ title }}</p>
    <!-- v-if="type==='playlist'" -->
    <input  type="text" placeholder="Введите название"/>
  <div
    :class="['download', { 'download_active': dragEnter }]"
    @drop="handleDragAndDropFiles"
    @dragleave="overrideEventDefaults"
    @dragover="overrideEventDefaults"
    @dragenter="overrideEventDefaults"
  >
    
    <div class="download__content">
      <p class="download__subtitle">Выберите файл или перетащите его сюда</p>
      <!-- <p class="download__text">JPG, PNG or PDF</p> -->
      <!-- <InputDownload @handleChange="handleChange" /> -->
    </div>
  </div>
  <VButton>Добавить</VButton>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  toRefs,
  ref,
  withDefaults,
  onMounted,
} from "vue";
import InputDownload from "@/components/UI/InputDownload/InputDownload.vue";
import VButton from '@/components/UI/VButton/VButton.vue'

type Props = {
  type: "songs" | "playlist";
  title: string;
};

const props = defineProps<Props>();
const { type, title } = toRefs(props);

const filesList = ref<Array<any>>([]);
const dragEnter = ref<boolean>(false);

function handleChange(e: any) {
  console.log(e.target.files)
  const filesObj = Object.values(e.target.files);
  filesList.value = [...filesList.value, ...filesObj];
  console.log(filesList.value)
}

function overrideEventDefaults(event: any) {
  event.preventDefault();
  event.stopPropagation();
  dragEnter.value = true;
}

function handleDragAndDropFiles(event: any) {
  console.log(event.dataTransfer.files);
  overrideEventDefaults(event);
  dragEnter.value = false;
  if (!event.dataTransfer) {
    return;
  }
 
  handleFiles(event.dataTransfer.files);

}

function handleFiles(fileList: any) {
  // if (fileList) {
  //   let files = Array.from(fileList);
  //   filesList.value = [...filesList.value, ...files];
  // }
}
</script>

<style scoped lang="scss">
@import './Download.scss';
</style>