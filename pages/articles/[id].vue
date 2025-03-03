<script lang="ts" setup>
import { object, pipe, string, number, nonEmpty } from "valibot";

const schema = object({
  code: pipe(string(), nonEmpty("Code is required")),
  name: pipe(string(), nonEmpty("Name is required")),
  price: number(),
});

const router = useRouter();
const route = useRoute();
const supabase = useSupabaseClient();
const toast = useToast();

const initialState = ref<Tables["articles"]>({
  code: "",
  name: "",
  price: 0,
});

const { data, error } = await supabase.from("articles").select("*").eq("id", route.params.id).single();

if (error) {
  toast.add({
    title: "Error",
    color: "red",
    icon: "fa6-regular:circle-xmark",
    description: "Error fetching article: " + error.message,
    ui: {
      container: "bg-red-950",
    },
  });
} else {
  initialState.value = data;
}

async function onSubmit(article: Tables["articles"]) {
  const { error } = await supabase.from("articles").update(article).eq("id", route.params.id);

  if (error) {
    toast.add({
      title: "Error",
      color: "red",
      icon: "fa6-regular:circle-xmark",
      description: "Error updating article: " + error.message,
      ui: {
        container: "bg-red-950",
      },
    });
  } else {
    router.push("/articles");
    toast.add({
      color: "green",
      title: "Success",
      description: "Article updated successfully!",
      ui: {
        container: "bg-green-950",
      },
    });
  }
}
</script>

<template>
  <div>
    <ClientOnly>
      <Teleport
        defer
        to="#title"
      >
        <h1>Edit article</h1>
      </Teleport>
    </ClientOnly>
    <ArticleForm
      :schema="schema"
      :initial-state="initialState"
      @form-submitted="onSubmit"
    />
  </div>
</template>
