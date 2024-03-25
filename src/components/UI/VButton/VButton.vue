<template>
  <button
    :type="type"
    :class="[
      'button',
      {
        [`button_size_${size}`]: size,
      },
    ]"
    @click="emit('callback')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { toRefs, defineProps, defineEmits, withDefaults } from "vue";

type Props = {
  type?: "button" | "submit";
  size?: "small" | "middle" | "large";
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "middle",
});
const emit = defineEmits(["callback"]);

const { type, size } = toRefs(props);
</script>

<style scoped lang="scss">
.button {
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.9);
    transition: all 0.1s linear;
    opacity: 1;
    cursor: pointer;   
    width: min-content;
    color: white;
    border-radius: 6px;
    padding: 6px;
    background: rgba(0, 0, 0, .25);
    border: 1px solid rgba(255, 255, 255, 0.05);
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    &_size {
        &_small {
            height: 30px;            
        }

        &_middle {
            height: 40px;            
             padding: 12px;
        }

        &_large {
            height: 50px;            
            padding: 12px;
        }
    }

    &_shape  {
        &_round {
            border-radius: 50%;
        }
    }   

    &:hover {
        // background: rgba(0, 0, 0, 0.5);
        transition: all 0.1s linear;
        opacity: 1;
        // transform: scale(1.05);
    }
}
</style>