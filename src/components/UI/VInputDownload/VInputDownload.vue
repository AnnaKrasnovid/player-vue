<template>
  <label :htmlFor="name" :class="['label', { [className]: className }]">
    <slot>
      {{ t("download.button") }}
    </slot>
    <input
      type="file"
      :id="name"
      :accept="format === 'audio' ? 'audio/*' : 'image/*,.pdf,.jpeg,.png'"
      @change="handleChange"
      multiple
      class="input"
    />
  </label>
</template>

<script setup lang="ts">
import { defineEmits, withDefaults, defineProps, toRefs } from "vue";
import { useI18n } from "vue-i18n";

type Props = {
  format?: "audio" | "image";
  label?: string;
  name: string;
  className: string;
};

const emit = defineEmits(["add-files"]);
const props = withDefaults(defineProps<Props>(), {
  format: "audio",
  label: "",
});

const { format, label } = toRefs(props);

const { t } = useI18n();

async function handleChange(e) {  
  const filesObj = Object.values(e.target.files);

  emit("add-files", filesObj);
}
</script>

<style scoped lang="scss">
  @import './VInputDownload.scss';
</style>

