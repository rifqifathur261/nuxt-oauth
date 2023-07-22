<script setup>
definePageMeta({
  middleware: function (to, from) {
    const cookies = useCookie("accessToken");
    if (cookies.value) {
      return navigateTo("/");
    }
  },
});
const route = useRoute();
const supabase = useSupabaseAuthClient();

const login = async () => {
  const { user, session, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "/home",
    },
  });

  if (error) {
    console.error(error);
  }
  if (user) console.log("user", user);
  if (session) console.log("session", session);
};

if (route?.hash) {
  navigateTo("/");
}
</script>

<template>
  <div class="relative h-screen w-screen">
    <div
      class="shadow-lg p-10 rounded-md w-96 flex flex-col items-center absolute top-1/2 left-1/2"
      style="transform: translate(-50%, -50%)"
    >
      <Icon
        name="outline-PresentationChartLine"
        class="w-16 h-16 text-blue-500"
      />
      <h1 class="text-2xl mt-4 text-center">Welcome back to Stock Market!</h1>
      <button
        @click="login()"
        class="flex items-center gap-4 mt-10 outline outline-1 rounded-sm outline-slate-300 p-2"
      >
        <icons-google class="w-4 h-4"></icons-google>

        <span>Continue with Google</span>
      </button>
    </div>
  </div>
</template>