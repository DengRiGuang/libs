<template>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Storage } from 'libs';

export default {
  setup() {
    const value = ref(0);
    value.value = Storage.useStorage(1) + 1;
    return {
      value,
    };
  },
};
</script>
