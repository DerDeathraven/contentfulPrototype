<template>
  <div>
    <Paragraph :content="fields.beschreibung"></Paragraph>
    <Count :count="fields.anzahl"></Count>
    <pic :fields="fields.picture.fields"></pic>
  </div>
</template>

<script setup lang="ts">
import Paragraph from "./subcomps/paragraph.vue";
import Count from "./subcomps/count.vue";
import { EntryFields } from "contentful";
import pic from "./subcomps/picture.vue";
type itemProps = {
  fields: {
    beschreibung: EntryFields.RichText;
    anzahl: EntryFields.Number;
    picture: EntryFields.Object;
  };
};
defineProps<itemProps>();
</script>

<style scoped></style>
