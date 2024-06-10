import { ref, watch } from "vue";

export function useSwitchSettings(refElement: any, nameSetting: string) {  
  const optionName = ref('');

  const addSettingClass = (setting: string) => refElement.value.classList.add(setting);
  const removeSettingClass = (setting: string) => refElement.value.classList.remove(setting);

  const addSettings = (setting: string) => {
    if (setting) {
      if (optionName.value) {
        removeSettingClass(optionName.value);
      }
      addSettingClass(setting);
      localStorage.setItem(nameSetting, setting);
    } else {
      removeSettingClass(optionName.value);
      localStorage.removeItem(nameSetting);
    }
  }

  const changeSetting = (setting: string) => {
    addSettings(setting);
    optionName.value = setting   
  }

  watch(()=> refElement.value, ()=> {
    const localStorageSetting = localStorage.getItem(nameSetting);

    if (localStorageSetting && refElement.value) {
      addSettingClass(localStorageSetting);
      optionName.value = localStorageSetting 
    }
  }, { immediate: true })

  return { changeSetting, optionName };  
}
