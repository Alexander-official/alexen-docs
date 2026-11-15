<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import SkinSwitcher from "./SkinSwitcher.vue";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #nav-bar-content-after><SkinSwitcher /></template>
    <template #nav-screen-content-after><div class="skin-screen"><SkinSwitcher /></div></template>
  </Layout>
</template>
