<template>
  <div class="input-box">
    <label v-if="title" class="input-box__label">
      {{ title }}
    </label>

    <div class="input-box__container">
      <input
        v-model="localValue"
        :type="type"
        :placeholder="placeholder"
        @input="emits('change-input', localValue)"
        class="input-box__input"
      />
      <button
        v-if="valueLength"
        class="button-clear"
        type="button"
        @click="clearInput"
      >
        <VIconClose size="small" />
      </button>
    </div>
    <VError :error="error" />
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  toRefs,
  withDefaults,
  ref,
  defineEmits,
  computed,
  watch,
} from "vue";

import VIconClose from "../VIcons/VIconClose.vue";
import VError from "@/components/UI/VError/VError.vue";

type Props = {
  type?: string;
  placeholder?: string;
  title?: string;
};

const emits = defineEmits(["change-input"]);
const props = withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "Введите название",
});

const { type, placeholder, title } = toRefs(props);

const localValue = ref<string>("");
const error = ref<string>("");

const valueLength = computed(() => localValue.value.length);

const clearInput = () => {
  localValue.value = "";
};

</script>

<style scoped lang="scss">
  @import './VInput.scss';
</style>
