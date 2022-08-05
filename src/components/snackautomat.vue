<template>
  <div>
    <paragraph :content="fields.beschreibung"></paragraph>
    <count :count="fields.anzahl"></count>
  </div>
</template>

<script setup lang="ts">
import paragraph from "./subcomps/paragraph.vue";
import count from "./subcomps/count.vue";
import { Entry, EntryFields } from "contentful";
type snackautomatProps = {
  fields: {
    beschreibung: EntryFields.RichText;
    anzahl: EntryFields.Number;
  };
};
defineProps<snackautomatProps>();
</script>

<style scoped></style>
