<template>
  <ul v-if="files?.length" class="download-list scroll">
    <Animation
      v-for="(file, index) in files"
      tag="li"
      :key="index"
      :elements="1"
      :index="index"
    >
      <DownloadFile :file="file" @delete-file="emits('delete-file', $event)" />
    </Animation>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from "vue";

import Animation from "@/components/UI/Animation/Animation.vue";
import DownloadFile from "@/components/DownloadFile/DownloadFile.vue";

type Props = {
  files: Array<any>;
};

const props = defineProps<Props>();
const emits = defineEmits(["delete-file"]);

const { files } = toRefs(props);

</script>

<style lang="scss">
   @import "./DownloadList.scss";
</style>