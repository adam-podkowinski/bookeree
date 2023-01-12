<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <main>
    <transition name="page" mode="out-in">
      <LandingPage v-if="user == undefined" />
      <LandingPageUser v-else />
    </transition>
  </main>
</template>
