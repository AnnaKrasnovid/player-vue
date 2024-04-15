<template>
  <header class="header">
    <RouterLink to="/playlists" class="link"> 
      Плейлисты 
    </RouterLink>

    <VHint text="Сменить тему">
      <VSelect :options="themes" :showArrow="false" :defaultValue="themes[0].value"/>
    </VHint>

    <VHint text="Изменить язык">
      <VSelect
        :options="lang"
        :defaultValue="lang[0].value"
        :showArrow="false"
      />
    </VHint>
  </header>
</template>

<script setup lang="ts">
import VHint from "@/components/UI/VHint/VHint.vue";
import VSelect from "@/components/UI/VSelect/VSelect.vue";

const themes = [
  {
    id: "1",
    title: "Розовая",
    value: "Pink",
  },
  {
    id: "2",
    title: "Голубая",
    value: "Blue",
  },
];

const lang = [
  {
    id: "1",
    title: "ru",
    value: "ru",
  },
  {
    id: "2",
    title: "en",
    value: "en",
  },
];
</script>

<style scoped lang="scss">
  @import './TheHeader.scss';
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px 0;
  }
  .link {
    font-size: 14px;
  }
</style>