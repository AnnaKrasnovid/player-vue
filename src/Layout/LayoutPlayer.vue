<template >
  <div class="root" ref="refRoot" >
    <!-- :style="{'background-image': `url(${song?.activeSong?.cover})`}" -->
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
import { ref } from "vue";

import TheHeader from "@/components/TheHeader/TheHeader.vue";
import Player from "@/components/Player/Player.vue";
import { useActiveSong } from "@/store/activeSong" 

const refRoot = ref<HTMLElement>();

const { song } = useActiveSong()
</script>

<style lang="scss" >
@import './LayoutPlayer.scss';
</style>