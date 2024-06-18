<template>
  <header class="header">
    <RouterLink to="/playlists" class="link"> 
      {{ t('playlists') }} 
    </RouterLink>

    <VHint :text="t('hintTheme')">
      <VSelect 
      :options="themes" 
      :showArrow="false" 
      :defaultValue="switchTheme.optionName "
      @change-option="handleChangeOptions('theme', $event)"
    />
    </VHint>

    <VHint :text="t('hintLanguage')">
      <VSelect
        :options="lang"
        :defaultValue="switchLang.optionName"
        :showArrow="false"
        @change-option="handleChangeOptions('lang', $event)"
      />
    </VHint>
  </header>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from "vue";
import { useI18n } from "vue-i18n";

import VHint from "@/components/UI/VHint/VHint.vue";
import VSelect from "@/components/UI/VSelect/VSelect.vue";
import { useSwitchSettings } from "@/composables/useSwitchSettings"; 
import { useSettingsStore } from "@/store/settingsStore";

type Props = {
  refRoot: any;
};

const props = defineProps<Props>();
const { refRoot } = toRefs(props);

const { t, locale } = useI18n()
const { changeTheme } = useSettingsStore()
const switchTheme = useSwitchSettings(refRoot, 'theme');
const switchLang = useSwitchSettings(refRoot, 'lang');

const themes = computed(() => [
  {
    id: "1",
    title: t('theme.pink'),
    value: "pink",
  },
  {
    id: "2",
    title: t('theme.blue'),
    value: "blue",
  },
  {
    id: "3",
    title: t('theme.green'),
    value: "green",
  },
],

) ;
const lang = computed(() =>[
  {
    id: "1",
    title: t('language.ru'),
    value: "ru",
  },
  {
    id: "2",
    title: t('language.en'),
    value: "en",
  },
])

const handleChangeOptions =(setting, option)=> {
  if(setting === 'theme') {
    switchTheme.changeSetting(option);
    changeTheme(option)
  } 

  if (setting === 'lang') {
    switchLang.changeSetting(option);
    locale.value = option;
  }
}

</script>

<style scoped lang="scss">
  @import './TheHeader.scss'; 
</style>