<script setup>
import { ref } from "vue";

const name = ref("");
</script>
<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <v-input id="name" label="Name" v-model="name" />

    {{ name }}
  </div>
</template>
