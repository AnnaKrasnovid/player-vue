<template>
  <div className='heading'>
            <h1 className='heading__name'>
               {{activeSong.author}}
            </h1>
            <p className='heading__title'>{{activeSong.title}}</p>
        </div>
</template>

<script setup lang="ts">
//const { activeSong } = useSelector((state: any) => state.activeSong);
const activeSong = { author:'author', title:'title' }
</script>

<style scoped lang="scss">
  @import './PlayerHeading.scss';
</style>