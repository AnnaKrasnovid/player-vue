<template>
  <div class="file">
    <div class="file__container">
      <div class="file__box">
        <p class="file__author">{{ file.author }}</p>
        <h3 class="file__title">{{ file.title }}</h3>
      </div>
      <div class="file__size">
        <VButton
          class="button-overlay-card"
          @click="emits('delete-file', file.id)"
        >
          <IconDelete />
        </VButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from "vue";

import VButton from "@/components/UI/VButton/VButton.vue";
import IconDelete from "@/components/UI/VIcons/IconDelete.vue";

import { SongInt } from "@/types/types";

type Props = {
  file?: Array<SongInt>;
};

const props = defineProps<Props>();
const emits = defineEmits(["delete-file"]);

const { file } = toRefs(props);

</script>

<style scoped lang="scss">
@import "./DownloadFile.scss";
</style>