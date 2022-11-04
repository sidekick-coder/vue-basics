<script setup>
import { onMounted, onBeforeUpdate, ref, useSlots } from "vue";

const current = ref(0);
const items = ref([]);
const slots = useSlots();

function setItem() {
  items.value = [];

  if (!slots.default) return;

  const children = slots.default();

  children
    .filter((c) => typeof c.type === "object")
    .filter((c) => c.type.name === "VTabItem")
    .forEach((c) => {
      items.value.push({
        label: c.props.label,
        component: c,
      });
    });
}

onMounted(setItem);

onBeforeUpdate(setItem);
</script>
<template>
  <div class="border">
    <header class="flex p-2 gap-x-4 border-b">
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        @click="current = index"
      >
        {{ item.label }}
      </v-btn>
    </header>
    <template v-for="(item, index) in items" :key="index">
      <component :is="item.component" v-if="current === index" />
    </template>
  </div>
</template>
