<template>
  <div>
    <NavBar />
    <UContainer>
        <slot name="default"/>
    </UContainer>
  </div>
  <!-- <div class="min-h-screen flex flex-col">
        <header class="bg-primary-400">
        <PageHeader />
        </header>
        <main class="flex-1 p-8">
        <PrimeCard>
            <template #title>
            <div class="flex items-center justify-between">
                <div id="pageTitle" />
                <div
                id="actions"
                class="flex items-center justify-end gap-4"
                />
            </div>
            </template>
            <template #content>
            <slot />
            </template>
        </PrimeCard>
        </main>
        <footer class="text-center">Copyright nothing. License MIT</footer>
    </div>-->
</template>
