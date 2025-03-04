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
    <ArticleList
      :articles="articles"
      @article-edited="onArticleEdited"
      @article-deleted="onArticleDeleted"
    />
    <UModal v-model="showDeleteModal">
      <UCard>
        <template #header>
          <h3>Confirm Deletion</h3>
        </template>
        <template #default>
          <p>Are you sure you want to delete this article?</p>
        </template>
        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton
              color="red"
              @click="confirmDelete"
            >
              <template #leading><Icon name="fa6-solid:trash-can" /></template>
              Yes, delete
            </UButton>
            <UButton
              color="gray"
              variant="ghost"
              @click="showDeleteModal = false"
            >
              No
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();
const { data: articles, refresh } = await useAsyncData("article", async () => {
  const { data } = await supabase.from("articles").select("*");

  return data;
});

const router = useRouter();
const toast = useToast();
const showDeleteModal = ref(false);
const articleToDelete = ref<number | null>(null);

function onArticleEdited(id: number) {
  router.push(`/articles/${id}`);
}

function onArticleDeleted(id: number) {
  articleToDelete.value = id;
  showDeleteModal.value = true;
}

async function confirmDelete() {
  if (articleToDelete.value === null) return;

  const { error } = await supabase.from("articles").delete().eq("id", articleToDelete.value);
  if (error) {
    toast.add({
      title: "Error",
      color: "red",
      icon: "fa6-regular:circle-xmark",
      description: "Error deleting article: " + error.message,
      ui: {
        container: "bg-red-950",
      },
    });
  } else {
    toast.add({
      color: "green",
      title: "Success",
      description: "Article deleted successfully!",
      ui: {
        container: "bg-green-950",
      },
    });
    refresh();
    showDeleteModal.value = false;
  }
}
</script>
