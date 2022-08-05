<template>
  <div class="blog">
    <div class="header">
      <Pic :fields="picture"></Pic>
    </div>
    <div class="content">
      {{ desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Pic from "../subcomps/picture.vue";
type blogPreview = {
  entry: any;
};
const props = defineProps<blogPreview>();
const picture = props.entry.fields.picture.fields;
const desc = props.entry.fields.beschreibung;
</script>

<style lang="scss">
.blog {
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    img {
      width: 100%;
      object-fit: fill;
    }
  }
  .content {
    text-align: center;
  }
}
</style>
