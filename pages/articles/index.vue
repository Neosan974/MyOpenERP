<template>
  <div>
    <ClientOnly>
      <Teleport
        defer
        to="#title"
      >
        <h1>Articles</h1>
      </Teleport>
      <Teleport
        defer
        to="#actions"
      >
        <ButtonRefresh @click="refresh" />
        <ButtonAdd @click="router.push('/articles/new')" />
      </Teleport>
    </ClientOnly>
    <ArticleList :articles="articles" />
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();
const { data: articles, refresh } = await useAsyncData("article", async () => {
  const { data } = await supabase.from("articles").select("*");

  return data;
});

const router = useRouter();
</script>
