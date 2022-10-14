<script setup>
function onClick() {
  alert("click");
}
</script>
<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <v-btn @click="onClick">Hello word</v-btn>
  </div>
</template>
