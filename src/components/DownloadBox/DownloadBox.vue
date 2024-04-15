<template>
  <div
    :class="['download-box', { 'download-box_active': dragEnter }]"
    @drop="handleDragAndDropFiles"
    @dragleave="overrideEventDefaults"
    @dragover="overrideEventDefaults"
    @dragenter="overrideEventDefaults"
  >
    <div class="download-box__content">
      <p class="download-box__subtitle">
        Выберите файл или перетащите его сюда
      </p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, ref, defineEmits } from "vue";

// type Props = {
//   isOpen: boolean;
//   refElement?: any;
// };

// const props = defineProps<Props>();
// const { isOpen, refElement } = toRefs(props);
const emit = defineEmits(["add-files"]);

const dragEnter = ref<boolean>(false);

function overrideEventDefaults(event: any) {
  event.preventDefault();
  event.stopPropagation();
  dragEnter.value = true;
}

function handleDragAndDropFiles(event: any) {
  overrideEventDefaults(event);
  dragEnter.value = false;

  if (!event.dataTransfer) {
    return;
  }

  emit("add-files", Object.values(event.dataTransfer.files));
}
</script>

<style scoped lang="scss">
  @import './DownloadBox.scss';
</style>