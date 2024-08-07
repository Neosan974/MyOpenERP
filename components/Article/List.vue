<template>
  <PrimeDataTable
    :value="props.articles"
    :loading="props.loading"
  >
    <template #empty>
      <div
        v-if="!props.loading"
        class="flex flex-col align-center justify-center gap-2 text-gray-400"
      >
        <FontAwesome
          :icon="faTriangleExclamation"
          class="text-5xl"
        />
        <div class="text-center text-xl">Nothing here</div>
      </div>
    </template>
    <PrimeColumn field="code">
      <template #header>
        <div class="text-black">Code</div>
      </template>
      <template #body="{ data }">
        <div class="text-black">{{ data.code }}</div>
      </template>
    </PrimeColumn>
    <PrimeColumn field="name">
      <template #header>
        <div class="text-black">Name</div>
      </template>
      <template #body="{ data }">
        <div class="text-black">{{ data.name }}</div>
      </template>
    </PrimeColumn>
  </PrimeDataTable>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import type { Article } from "~/Model/Article";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  articles: Article[] | null;
  loading: boolean;
}>();
</script>
