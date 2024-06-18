import { defineStore } from "pinia";

export const useSettingsStore = defineStore('settingsStore', {
  state: () => ({
    theme: null,
  }),
  getters: {},
  actions: {
    changeTheme(value:any) {
      this.theme = value
    },
  },
})