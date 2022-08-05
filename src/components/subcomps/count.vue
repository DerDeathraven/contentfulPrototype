<template>
  <div>
    {{ count }}
  </div>
</template>

<script setup lang="ts">
type countProps = {
  count: number;
};
defineProps<countProps>();
</script>

<style scoped></style>
