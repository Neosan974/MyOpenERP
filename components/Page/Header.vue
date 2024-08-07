<template>
  <PrimeMenubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
      <NuxtLink
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
      >
        <a
          v-ripple
          :href="href"
          v-bind="props.action"
          @click="navigate"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </NuxtLink>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <span
          v-if="hasSubmenu"
          class="pi pi-fw pi-angle-down ml-2"
        />
      </a>
    </template>
  </PrimeMenubar>
</template>

<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = ref<MenuItem[]>([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Articles",
    icon: "pi pi-book",
    route: "/articles",
  },
]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const activeRoute = useRoute();
</script>
