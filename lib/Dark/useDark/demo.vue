<template>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useDark } from 'libs/Dark/useDark';

export default {
  setup() {
    const value = ref(0);
    value.value = useDark(1) + 1;
    return {
      value,
    };
  },
};
</script>
