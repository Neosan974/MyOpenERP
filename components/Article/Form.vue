<script lang="ts" setup>
import type { InferOutput, SafeParseReturnType } from "valibot";
import { safeParse, safeParser } from "valibot";
import type { FormSubmitEvent } from "#ui/types";

const { schema, initialState } = defineProps<{
  schema: SafeParseReturnType<Tables<"articles">, Tables<"articles">>;
  initialState: Tables<"articles">;
}>();

type Schema = InferOutput<typeof schema>;

const state = reactive<Tables<"articles">>({
  ...initialState,
});

const emit = defineEmits(["formSubmitted"]);

async function onSubmit(_event: FormSubmitEvent<Schema>) {
  const result = safeParse(schema, state);
  if (result.success) {
    emit("formSubmitted", state);
  }
}
</script>

<template>
  <UForm
    :schema="safeParser(schema)"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <ClientOnly>
      <Teleport
        defer
        to="#title"
      >
        <h1>New Article</h1>
      </Teleport>
    </ClientOnly>
    <UFormGroup
      label="Code"
      name="code"
    >
      <UInput v-model="state.code" />
    </UFormGroup>

    <UFormGroup
      label="Name"
      name="name"
    >
      <UInput v-model="state.name" />
    </UFormGroup>

    <UFormGroup
      label="Price"
      name="price"
    >
      <UInput
        v-model="state.price"
        type="number"
      />
    </UFormGroup>
    <ButtonSave type="submit" />
  </UForm>
</template>
