<template >
  <div class="root" ref="refRoot">
    <div class="main-page" >
      <div class="layout">
        <TheHeader :refRoot="refRoot" />
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
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import Player from "@/components/Player/Player.vue";
import { ref } from "vue";

const refRoot = ref<HTMLElement>();
</script>

<style lang="scss" >
@import './LayoutPlayer.scss';
.page {
    padding: 36px 24px 48px; //$padding-container
}
</style>