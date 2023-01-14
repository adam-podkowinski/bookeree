<script setup lang="ts">
const user = useSupabaseUser();
// TODO: Use "/dashboard" for LandingPageUser and always use "/" for LandingPage
</script>

<template>
  <main>
    <transition name="page" mode="out-in">
      <LandingPage v-if="user == undefined" />
      <LandingPageUser v-else />
    </transition>
  </main>
</template>
