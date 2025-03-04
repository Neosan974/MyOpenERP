<script lang="ts" setup>
const { articles } = defineProps<{
  articles: { id?: number; code?: string; name?: string }[];
}>();
const columns = [
  { key: "id", label: "ID" },
  { key: "code", label: "Code" },
  { key: "name", label: "Name" },
  { key: "actions", label: "Actions" },
];

const emit = defineEmits(["articleEdited", "articleDeleted"]);

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => emit("articleEdited", row.id),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: () => emit("articleDeleted", row.id),
      color: "red",
    },
  ],
];
</script>

<template>
  <UTable
    :rows="articles"
    :columns="columns"
  >
    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-ellipsis-horizontal-20-solid"
        />
      </UDropdown>
    </template>
  </UTable>
</template>
