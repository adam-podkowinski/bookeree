<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <main>
    <LandingPage v-if="user == undefined" />
    <LandingPageUser v-else />
  </main>
</template>
