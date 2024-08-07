<template>
  <div>
    <Teleport to="#pageTitle">Articles list</Teleport>
    <Teleport to="#actions">
      <div class="flex items-center justify-end gap-2">
        <ButtonAdd />
        <PrimeButton
          label="Refresh"
          @click="refetch"
        />
      </div>
    </Teleport>
    <div class="text-black">
      <pre>{{ status }}</pre>
      <ArticleList
        :articles="articles"
        :loading="status === 'idle' || status === 'pending'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "~/Model/Article";

const {
  data: articles,
  status,
  refresh,
} = useAsyncData(
  "articles",
  async () => {
    return [
      {
        id: 1,
        code: "1",
        name: "Article 1",
      },
      {
        id: 2,
        code: "2",
        name: "Article 2",
      },
    ] as Article[];
  },
  {
    server: false,
    lazy: true,
  },
);

function refetch() {
  console.log("refresh");
  refresh();
}
</script>
