<script lang="ts" setup></script>

<template>
  <UButton class="items-center">
    <template #leading>
      <UIcon name="ep:refresh"/>
    </template>
    <slot name="default">
        Refresh
    </slot>
  </UButton>
</template>
