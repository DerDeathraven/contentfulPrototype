<template>
  <img :src="fields.file.url" :alt="fields.title" />
</template>

<script setup lang="ts">
type pictureProps = {
  fields: any;
};
defineProps<pictureProps>();
</script>

<style scoped>
img {
  object-fit: fill;
}
</style>
