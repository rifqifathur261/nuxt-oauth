
<script setup>
const route = useRoute();
console.log("route ", route.hash);
// definePageMeta({
//   middleware: ["auth"],
// });
// const user = useSupabaseUser();
// let name = "";
// let profile = "";
// try {
//   name = computed(() => user?.value.user_metadata.full_name);
//   profile = computed(() => user?.value.user_metadata.avatar_url);
// } catch (error) {
//   console.log(error);
// }

const { Chart } = useNuxtApp();

const supabase = useSupabaseAuthClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo("/login");
};
</script>

<template>
  <div>
    <!-- {{ name }}
    {{ profile }} -->
    <!-- <button @click="logout()">Logout</button> -->
    <Chart />
    Home
  </div>
</template>