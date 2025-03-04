<script lang="ts" setup></script>

<template>
  <UButton class="items-center">
    <template #leading>
      <UIcon name="ep:plus"/>
    </template>
    <slot name="default">
        Add
    </slot>
  </UButton>
</template>
