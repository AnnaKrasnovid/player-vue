<template>
  <div className="heading">
    <h1 className="heading__name">
      {{ author ? author : "" }}
    </h1>
    <p className="heading__title">
      {{ title ? title : "" }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

type Props = {
  author: string;
  title: string
};

const props = defineProps<Props>();
const { author, title } = toRefs(props);

</script>

<style scoped lang="scss">
  @import './PlayerHeading.scss';
</style>