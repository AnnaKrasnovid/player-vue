<template>
    <ul v-if="files?.length" class="download-list scroll">
        <Animation 
        v-for="(file, index) in files"
        :key="index"
        :elements="1" 
        :index="index"        
        >
            <DownloadFile :file="file"/>
        </Animation>        
    </ul>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

import Animation from "@/components/UI/Animation/Animation.vue";
import  DownloadFile from "@/components/DownloadFile/DownloadFile.vue";

type Props = {
  files: Array<any>;
};

const props = defineProps<Props>();
const { files } = toRefs(props);
</script>

<style lang="scss">
    .download-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>