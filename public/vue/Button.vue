<script setup>
const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  text: String,
});
</script>

<template>
  <button
    :class="`Button text-base px-4 py-2 rounded transition text-white ${
      props.loading
        ? 'bg-slate-300 disabled:bg-slate-300 hover:bg-primary-400'
        : 'bg-primary-500'
    }`"
    :disabled="props.loading || props.disabled"
  >
    <slot v-if="props.loading" />
    <span v-else>{{ props.text }}</span>
  </button>
</template>