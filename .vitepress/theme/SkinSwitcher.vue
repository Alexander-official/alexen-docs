<script setup lang="ts">
import { onMounted, ref } from "vue";

const skins = [
  { id: "default", name: "Default" },
  { id: "clay", name: "Clay" },
  { id: "glass", name: "Glass" },
];
const current = ref("default");
const open = ref(false);

function apply(id: string) {
  current.value = id;
  document.documentElement.dataset.skin = id;
  try { localStorage.setItem("alexen-skin", id); } catch (e) {}
  open.value = false;
}
onMounted(() => {
  let s = "default";
  try { s = localStorage.getItem("alexen-skin") || "default"; } catch (e) {}
  current.value = skins.some((k) => k.id === s) ? s : "default";
});
</script>

<template>
  <div class="skin" @keydown.esc="open = false">
    <button class="skin-btn" type="button" :aria-expanded="open" aria-label="Theme style" @click="open = !open">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3a1.6 1.6 0 0 1 1.2-2.7H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/>
        <circle cx="7.5" cy="11" r="1" /><circle cx="10.5" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" />
      </svg>
    </button>
    <ul v-if="open" class="skin-menu" role="menu">
      <li v-for="k in skins" :key="k.id">
        <button type="button" role="menuitemradio" :aria-checked="current === k.id" :class="{ on: current === k.id }" @click="apply(k.id)">
          <span class="dot" :data-k="k.id"></span>{{ k.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
