<template >
  <div class="root">
    <div class="layout">
      <TheHeader />
      <main class="layout__main">
        <div class="layout__container">
          <div class="layout__grid">
            <Player />
            <div class="container page">
              <slot />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import Player from "@/components/Player/Player.vue";
</script>

<style lang="scss" scoped>
@import './LayoutPlayer.scss';
.page {
    padding: 36px 24px 48px; //$padding-container
}
</style>