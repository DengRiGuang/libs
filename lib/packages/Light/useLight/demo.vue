<template>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';
// import  from 'libs';

export default {
  setup() {
    const value = ref(0);
    // console.log(Light);
    // value.value = Light.useLight(1) + 1;
    return {
      value,
    };
  },
};
</script>
