<template>
  <LayoutPlayerVue>
    <div class="container page">
      <!-- style={{ position: 'relative', width: '100%', overflow: 'hidden' }} -->
      <Songs :isActive="false" />
      <!-- <Collections closeModal={closeModal} isActive={isActive} /> -->
    </div>
  </LayoutPlayerVue>
</template>

<script setup lang="ts">
import LayoutPlayerVue from "@/Layout/LayoutPlayer.vue";
import Songs from "@/components/Songs/Songs.vue";
</script>

<style scoped lang="scss">
.page {
    padding: 36px 24px 48px; //$padding-container
}
</style>
