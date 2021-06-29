<template>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Storage } from 'libs';

export default {
  setup() {
    const value = ref(0);
    value.value = Storage.useBoolean(1);
    return {
      value,
    };
  },
};
</script>
