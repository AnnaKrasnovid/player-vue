<template>
  <div class="file">
    <div class="file__container">
      <div class="file__box">
        <p class="file__author">Author</p>
        <h3 class="file__title">Title</h3>
      </div>
      <div class="file__size">
        <!--TODO: Id for delete -->
        <VButton class="button-overlay-card" @click="emits('delete-file', file)">
          <IconDelete  />
        </VButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from "vue";

import VButton from "@/components/UI/VButton/VButton.vue";
import IconDelete from "@/components/UI/VIcons/IconDelete.vue";

type Props = {
  file?: Array<any>;
};

const props = defineProps<Props>()

const { file } = toRefs(props);
const emits = defineEmits(["delete-file"]);
</script>

<style lang="scss">
.file {
    padding: 16px;
         box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.9);
         border: 1px solid rgba(255, 255, 255, 0.05);
         border-radius: 6px;

         &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            width: 100%;
         }
        
         &__author{
            font-size: 16px;
         }
         &__title {
            font-size: 16px;
         }
}


</style>