<template>
  <div className="dropdown">
    <p v-show="label" className="dropdown__label">
      {{ label }}
    </p>

    <div :class="[
      'dropdown__select',
      { 'dropdown__select_active': isActive }
     ]">
      <Select
        :isActive="isActive"
        @openModal="openModal"
        :selectedItem="selectedItem"
        :showArrow="showArrow"
      />
      <div
        ref="refElement"
        :class="[
        'dropdown__options',
         { 'dropdown__options_active': isActive }
        ]"        
      >
        <!-- <ScrollBar> -->
        <Options
          :options="options"
          @choice-option="choiceOption"
          :selectedItem="selectedItem"
        />
        <!-- </ScrollBar> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs, ref, withDefaults, onMounted, watch } from "vue";
import Options from "./components/Options/Options.vue";
import Select from "./components/Select/Select.vue";
import { useToggleVisibility } from "@/composables/useToggleVisibility";

interface OptionItemInt {
  id: string,
  title: string,
  value: string,
}

type Props = {
  options: Array<OptionItemInt>,
  label?: string,
  placeholder?: string,
  defaultValue?: any,
  showArrow?: boolean
};

const emits = defineEmits(['changeOption'])
const props = withDefaults(defineProps<Props>(), {
  label: '',
  placeholder: '',
  defaultValue: '',
  showArrow: true,
})
const { options, label, placeholder, defaultValue, showArrow } = toRefs(props);

const { refElement, isActive, openModal, closeModal } = useToggleVisibility(false);
const selectedItem = ref<string | null>(null);

const choiceOption = (id: string | number) => { 
  closeModal();
  const item = options.value.find((i) => i.id === id);

  if (item) {
    selectedItem.value = item.title;
    emits('changeOption', item.value);
  }
}

const getTitle = () => {
  const defaultTitle = options.value.find((item) => item.value === defaultValue.value);

  const value =  defaultTitle ?  defaultTitle.title : options.value[0].title;
  selectedItem.value = value;
}

watch(()=> [defaultValue.value, options.value], ()=> {
  getTitle();
}, { immediate: true })

</script>

<style scoped lang="scss">
  @import './VSelect.scss';
</style>