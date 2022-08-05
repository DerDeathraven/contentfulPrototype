<template>
  <div>
    {{ content }}
  </div>
</template>

<script setup lang="ts">
import { EntryFields } from "contentful";

type paragraphProps = {
  content: EntryFields.RichText;
};
defineProps<paragraphProps>();
</script>

<style scoped></style>
