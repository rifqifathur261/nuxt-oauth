<template>
  <component :is="icon" v-if="name" />
</template>

<script setup>
import * as IconOutline from "@heroicons/vue/24/outline";
import * as IconSolid from "@heroicons/vue/24/solid";

const props = defineProps({
  name: {
    default: "outline-HomeIcon",
    type: String,
  },
});

const icon = computed(() => {
  const ic = props.name.split("-");
  let icon;
  if (ic[0].toLowerCase() == "outline") {
    icon = IconOutline[ic[1] + "Icon"];
  } else {
    icon = IconSolid[ic[1] + "Icon"];
  }
  return icon;
});
</script>

<style></style>
