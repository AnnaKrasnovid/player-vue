import { ref } from 'vue';

export function useDragAndDrop(callback: any) {
  const isDown = ref<boolean>(false)

  const handlerMouseDown = () => isDown.value = true;
  const handlerMouseleave = () => isDown.value = false;
  const handlerMouseUp = () => isDown.value = false;

  const handlerMouseMove = (e: any) => {
    if (!isDown.value) {
      return;
    }
    callback(e);
  }

  return {
    handlerMouseDown,
    handlerMouseleave,
    handlerMouseUp,
    handlerMouseMove,
  };
}

