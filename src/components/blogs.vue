<template>
  <div class="blogsList">
    <BlogPreview
      v-for="(item, i) in entries.items"
      :entry="item"
      class="blog"
      @click="change(i)"
    ></BlogPreview>
  </div>
  <div class="main">
    <largeBlock :entry="mainContent" :key="mainContent.sys.id"></largeBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { client } from "../contenfull/helper/connect.js";
import { entrieSwitcher } from "../helper/entrieSwitcher.js";
import BlogPreview from "./blog/blogPreview.vue";
import largeBlock from "./blog/largeBlock.vue";

const entries = await client.getEntries();
console.log(entries.items[0]);
const items = [];
entries.items.forEach((item) => {
  const obj = {
    item,
    comp: entrieSwitcher(item.sys.contentType.sys.id),
  };
  items.push(obj);
});
const mainContent = ref(entries.items[0]);
function change(index) {
  mainContent.value = entries.items[index];
}
</script>

<style lang="scss" scoped>
.blogsList {
  display: flex;
  .blog {
    width: 25vw;
  }
}
.main {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
