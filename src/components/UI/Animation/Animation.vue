<template>
  <tag
    :class="{
        'animation-default': !animationName,
        [animationName]: animationName,
        [className]:className
    }"
    :style="{
      animationDelay: animationDelay + 's',
      animationDuration: aninationDuration + 's',
    }"
    @click="emits('callback')"
  >
    <slot />
  </tag>

</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, toRefs, withDefaults } from "vue";

type AnimationTypes = "animation" | "animation-position";

type Props = {
  tag?: HTMLElement; // тег, по умолчанию div
  animationName?: AnimationTypes, //класс анимации     
  elements: number, // количество элементов анимации
  index: number, // индекс элемента
  stepDelay?: number, //промежуток задержки
  delay?: number // задержка перед началом анимации
  className?: string,
  isActive?: boolean,
};

const props = withDefaults(defineProps<Props>(), {
  stepDelay : 0.2, 
  index:0,
  delay: 0,
  className: '',
  isActive: true,
  tag: 'div',
});

const { animationName, elements, index, stepDelay, className, isActive, delay, tag } = toRefs(props);
const emits = defineEmits(["callback"]);

let animationDelay = index.value === 0 ? delay.value : (index.value + 1) * stepDelay.value + delay.value;
const aninationDuration = elements.value * stepDelay.value;

</script>

<style lang="scss">
  @import './Animation.scss';
</style>