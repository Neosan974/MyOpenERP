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
        <ButtonRefresh/>
        <ButtonAdd/>
      </Teleport>
    </ClientOnly>
    <ArticleList :articles="articles" />
  </div>
</template>

<script lang="ts" setup>
const articles = [];
</script>
