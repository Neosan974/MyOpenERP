<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications
      :ui="{
        position: 'top-0 end-0',
        strategy: 'override',
      }"
    />
  </div>
</template>
