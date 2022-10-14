<script setup>
const variations = {
  teal: "bg-teal-500 text-white",
  red: "bg-red-500 text-white",
  blue: "bg-blue-500 text-white",
};

defineProps({
  color: {
    type: String,
    default: "teal",
  },
});
</script>
<template>
  <button class="py-2 px-4 rounded" :class="variations[color]">
    <slot />
  </button>
</template>
