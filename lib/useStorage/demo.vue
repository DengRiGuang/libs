<template>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useStorage } from 'libs';

export default {
  setup() {
    const value = ref(0);
    value.value = useStorage(1) + 1;
    return {
      value,
    };
  },
};
</script>
