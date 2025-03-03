<script lang="ts" setup>
const {articles} = defineProps<{
    articles: {id?: number; code?: string; name?: string}[];
}>();
const columns = [
    {key: 'id', label: 'ID'},
    {key: 'code', label: 'Code'},
    {key: 'name', label: 'Name'},
];
</script>

<template>
    <UTable :rows="articles" :columns="columns" />
</template>
