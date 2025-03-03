<script lang="ts" setup></script>

<template>
  <UButton class="items-center">
    <template #leading>
      <UIcon name="fa-regular:save" />
    </template>
    <slot name="default"> Save </slot>
  </UButton>
</template>
