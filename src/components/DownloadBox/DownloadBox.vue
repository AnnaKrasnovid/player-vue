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
        {{ t('download.text')}}
      </p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useI18n } from "vue-i18n";

const emit = defineEmits(["add-files"]);

const { t } = useI18n()
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