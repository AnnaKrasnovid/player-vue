<template>
	<svg
		:width="size === 'middle' ? 16 : 8"
		:height="size === 'middle' ? 16 : 8"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M20 18L12 10L20 2L18 0L10 8L2 0L0 2L8 10L0 18L2 20L10 12L18 20L20 18Z"
			fill="#fff"
		/>
	</svg>
</template>

<script setup lang="ts">
import {
  defineProps,
  toRefs,
  withDefaults,
} from "vue";

type Props = {
  size?: "small" | "middle";
};

const props = withDefaults(defineProps<Props>(), {
  size: "middle",
});

const { size } = toRefs(props);
</script>

<style scoped lang="scss">

</style>
