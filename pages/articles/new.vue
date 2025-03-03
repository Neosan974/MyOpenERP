<template>
  <div>
    <ClientOnly>
      <Teleport
        defer
        to="#title"
      >
        <h1>New article</h1>
      </Teleport>
    </ClientOnly>
    <ArticleForm
      :schema="schema"
      :initial-state="initialState"
      @form-submitted="onSubmit"
    />
  </div>
</template>

<script lang="ts" setup>
import { object, pipe, string, number, nonEmpty } from "valibot";

const schema = object({
  code: pipe(string(), nonEmpty("Code is required")),
  name: pipe(string(), nonEmpty("Name is required")),
  price: number(),
});

const initialState = {
  code: "",
  name: "",
  price: 0,
};

const router = useRouter();
const supabase = useSupabaseClient();
const toast = useToast();

async function onSubmit(article: Tables["articles"]) {
  const { error } = await supabase.from("articles").insert([article]);

  if (error) {
    toast.add({
      title: "Error",
      color: "red",
      icon: "fa6-regular:circle-xmark",
      description: "Error saving article: " + error.message,
      ui: {
        container: "bg-red-950",
      },
    });
  } else {
    router.push("/articles");
    toast.add({
      color: "green",
      title: "Success",
      description: "Article saved successfully!",
      ui: {
        container: "bg-green-950",
      },
    });
  }
}
</script>
