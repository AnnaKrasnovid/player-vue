<template>
  <div
    class="progress"
    @mousedown="handlerMouseDown"
    @mouseleave="handlerMouseleave"
    @mouseup="handlerMouseUp"
    @mousemove="handlerMouseMove"
  >
    <div
      class="progress__container"
      ref="refProgress"
      @click="(e) => handleClickProgress(e)"
    >
      <div
        class="progress__progress"
        :class="{ progress__progress_type_point: point }"
        :style="{ width: `${progressWidth}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  withDefaults,
  defineProps,
  toRefs,
  defineEmits,
  watch,
} from "vue";
import { useDragAndDrop } from "@/composables/useDragAndDrop";

type Props = {
  point?: boolean;
  callback?: (progress: number) => void;
  currentProgress: number; // текущая длинна прогресс бара, пересчитается в %
  allProgress: number; // вся длинна прогресс бара, пересчитается в %
};

const props = withDefaults(defineProps<Props>(), {
  point: true,
});

const emit = defineEmits(["callback"]);

const { allProgress, currentProgress } = toRefs(props);

const {
  handlerMouseDown,
  handlerMouseleave,
  handlerMouseUp,
  handlerMouseMove,
} = useDragAndDrop(handleClickProgress);

const refProgress = ref<any>();
const progressWidth = ref<number>(0);

function handleClickProgress(e: any) {
  const element = refProgress.value.getBoundingClientRect();

  const width = element.width;
  const clickX = e.clientX - element.left;
  const currentTimeClick = (clickX * allProgress.value) / width;

  if (currentTimeClick >= 0 && currentTimeClick <= allProgress.value) {
    progressWidth.value = (currentTimeClick * 100) / allProgress.value;
    emit("callback", currentTimeClick);
  }
}

const getWidth = () => {
  if (currentProgress.value === 0) {
    progressWidth.value = 0;
  } else {
    progressWidth.value = (currentProgress.value * 100) / allProgress.value;
  }
};

watch(
  () => currentProgress.value,
  () => {
    getWidth();
  },
  { immediate: true },
)

</script>

<style scoped lang="scss">
  @import './VProgress.scss';
</style>