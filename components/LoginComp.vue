<script lang="ts" setup>
const { status, signIn, signOut } = useSession();
const login = () => signIn("auth0");
const logout = () => signOut();
const { data } = useFetch("/api/auth/protected");
</script>

<template>
  <div>
    {{ status }}
    {{ data }}
    <button v-if="!(status === 'authenticated')" @click="login">
      <slot>Log In</slot>
    </button>
    <button v-else @click="logout">
      <slot>Log Out</slot>
    </button>
  </div>
</template>
