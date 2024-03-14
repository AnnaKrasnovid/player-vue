import { onMounted, ref } from "vue";

export interface ToggleVisibilityInt {
  refElement: any,
  isActive: boolean,
  openModal: () => void,
  closeModal: () => void,
}

export function useToggleVisibility(  initiaLIsVisible: boolean) {
  const refElement = ref<any>(null);
  const isActive = ref<boolean>(initiaLIsVisible);

  const openModal = () => {
    isActive.value = true;  
  };
  
  const closeModal = () => {
    isActive.value = false;
  } 

  const handleClickOutside = (e: any) => {
    if (refElement.value && !refElement.value.contains(e.target)) {
      closeModal();
    }
  };
  
  onMounted(()=> {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  })

  return { refElement, isActive, openModal, closeModal };
}
