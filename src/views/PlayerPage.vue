<template>
    <LayoutPlayerVue> 
         <div class='container' 
         
         >
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
