import { Entry, Sys } from "contentful";
import snackautomatVue from "../components/snackautomat.vue";
import item from "../components/item.vue";

export function entrieSwitcher(entrie: Sys["id"]) {
  switch (entrie) {
    case "snackautomat":
      return snackautomatVue;
    case "item":
      return item;
  }
}
