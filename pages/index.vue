<script setup lang="ts">
const session = useSession();
const authenticated = computed(() => session.status.value === "authenticated");
</script>

<template>
  <main>
    <LandingPageUser v-if="authenticated" />
    <LandingPage v-else />
  </main>
</template>
