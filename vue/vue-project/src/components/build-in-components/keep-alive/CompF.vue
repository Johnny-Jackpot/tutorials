<script setup lang="ts">
import { ref } from 'vue';

const text = ref('')
</script>

<template>
  <p>Comp F input: {{ text }} <input type="text" v-model="text" /></p>
</template>

<style scoped></style>
