<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

<script setup lang="ts">
const links = [{
  label: 'MyOpenERP',
  // avatar: {
  //   src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  // },
  to: "/"
}, {
  label: 'Articles',
  // icon: 'i-heroicons-home',
  to: '/articles'
}]
</script>
