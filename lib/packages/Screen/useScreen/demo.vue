<template>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';
// import { Screen } from 'libs';

export default {
  setup() {
    const value = ref(0);
    // value.value = Screen.useScreen(1) + 1;
    return {
      value,
    };
  },
};
</script>
