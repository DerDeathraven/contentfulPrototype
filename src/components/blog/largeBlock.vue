<template>
  <div class="mainBlog">
    <div class="header">
      <Pic :fields="picture"></Pic>
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <div class="infoBar">
        <div class="description">{{ desc }}</div>
        <div class="reading">Reading time: <br />{{ reading }}</div>
      </div>
      <div class="mainRead">
        {{ mainRead }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Pic from "../subcomps/picture.vue";
type largeBlockProps = {
  entry: any;
};
const props = defineProps<largeBlockProps>();
const picture = props.entry.fields.picture.fields;
const desc = props.entry.fields.beschreibung;
const reading = props.entry.fields.anzahl;
const mainRead = props.entry.fields.mainText;
const title = props.entry.fields.title || "placeholder";
</script>

<style lang="scss">
.mainBlog {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  .header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      object-fit: fill;
    }
    h2 {
      text-align: center;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    .infoBar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .reading {
        text-align: center;
      }
    }
  }
}
</style>
