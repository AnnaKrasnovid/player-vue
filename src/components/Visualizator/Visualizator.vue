<template>
    <div class="canvas-box" ref="canvasBox">
      <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { watch, ref, defineProps, toRefs } from "vue";
import { useActiveSong } from "@/store/activeSong";

interface Props {
  refAudio: HTMLElement
}
const props = defineProps<Props>();
const { refAudio } = toRefs(props);

const canvas = ref<HTMLElement>()
const canvasBox = ref<HTMLElement>()
const canvasWidth = ref(400)
const canvasHeight = ref<number>(400)
const canvasCenterY = ref<number>(canvasHeight.value/2)
const bars = ref<number>(200)
const barWidth  = ref<number>(2)
const barHeight = ref<number>()

const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
const frequencyArray = ref()
const { song } = useActiveSong()

function startAnimation() {    
  const  context = canvas.value.getContext("2d")
  canvas.value.setAttribute('width', canvasWidth.value)
  canvas.value.setAttribute('height', canvasHeight.value)

  analyser.connect(audioContext.destination);
  frequencyArray.value = new Uint8Array(analyser.frequencyBinCount);

  // очищаем холст
  context.clearRect(0, 0, canvasWidth.value, canvasWidth.value/2);   
  // копируем данные о частотах в frequencyArray
  analyser.getByteFrequencyData(frequencyArray.value);
  
  let stepX = 0
 
  // делаем итерацию по количеству колонок 
  for (let i = 0; i < bars.value; i++) {    
    barHeight.value = frequencyArray.value[i] / 1.5;
    const { red, green, blue } = getColors(i)

    // рисуем колонки    
    // тень
    context.beginPath();
    const height = canvasHeight.value - barHeight.value - canvasCenterY.value
    context.fillStyle=`rgba(${red},${green},${blue},${0.3})`
    context.fillRect(stepX + 2, height + (height * 0.10), barWidth.value, barHeight.value * 1.5)
    
    // верх  
    context.beginPath();
    context.fillStyle= `rgba(${red},${green},${blue},${1})`
    context.fillRect(stepX, canvasHeight.value - barHeight.value - canvasCenterY.value, barWidth.value, barHeight.value)
    
    // низ
    context.beginPath();
    context.fillStyle=`rgba(${red},${green},${blue},${0.9})`
    context.fillRect(stepX, canvasCenterY.value, barWidth.value - 0.3, barHeight.value)
    
    stepX = stepX + 6
  }

  // зацикливаем анимацию
  requestAnimationFrame(startAnimation);
}

const getColors=(i)=> {
  let red
  let green
  let blue

  if(localStorage.getItem('theme') === 'pink' || localStorage.getItem('theme') === null) {
    red = i * barHeight.value / 4
    green = (i * barHeight.value/frequencyArray.value[i]) / 2
    blue = i * barHeight.value / 8
  } else if (localStorage.getItem('theme') === 'blue') {
    red = 250 / frequencyArray.value[i] / 2
    green = i *barHeight.value / i * 2.5
    blue = i * barHeight.value / i * 3
  } else if (localStorage.getItem('theme') === 'green') {
    red = 250 / frequencyArray.value[i] / 2
    green = i * barHeight.value / i * 4
    blue = i * barHeight.value / i * 4
  } 

  return { red, green, blue }
}

watch(()=> song.isPlaySong, ()=> {
  startAnimation()
})

watch(()=> refAudio.value, ()=> {
  if(refAudio.value){
    const source = audioContext.createMediaElementSource(refAudio.value)
    source.connect(analyser);
  }
}, { deep: true, immediate:true })

</script>

<style scoped lang="scss">
@import './Visualizator.scss';
</style>


