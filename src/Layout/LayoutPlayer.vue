<template >
  <div class="root">
    <div class="layout">
      <!-- <Header callback={openModal} /> -->
      <main class="layout__main">
        <div class="layout__container">
          <div class="layout__grid">
            <Player />
            <!--      {activeSong
                            ? <Outlet context={[closeModal, isActive]} />
                            : <p>Нет данных </p>
                        } -->
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Player from "@/components/Player/Player.vue";
</script>

<style lang="scss" scoped>
@import './LayoutPlayer.scss';
</style>