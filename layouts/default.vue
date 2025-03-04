<template>
  <div>
    <NavBar />
    <UContainer>
      <UCard class="mt-10">
        <template #header>
          <div class="flex justify-between">
            <div id="title" />
            <div
              id="actions"
              class="flex flex-row gap-2"
            />
          </div>
        </template>
        <slot name="default" />
      </UCard>
    </UContainer>
  </div>
</template>
