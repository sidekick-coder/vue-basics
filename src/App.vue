<script setup>
import { ref } from "vue";

const name = ref("");
</script>
<template>
  <div class="flex flex-wrap items-center justify-center h-screen w-screen">
    <div class="flex flex-wrap gap-y-5">
      <div class="w-full">
        <v-input id="name" label="Name" v-model="name" />
      </div>
      <div class="w-full">
        <v-btn>Hello</v-btn>
      </div>

      <div class="w-full">
        <v-hello></v-hello>
      </div>
    </div>
  </div>
</template>
