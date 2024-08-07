<template>
  <PrimeButton>
    <template #default><FontAwesome :icon="props.icon ?? faPlus" />&nbsp;{{ props.label ?? "Add" }}</template>
  </PrimeButton>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { faPlus, type IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  label?: string;
  icon?: IconDefinition;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>();
</script>
