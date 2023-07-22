<script setup>
const supabase = useSupabaseAuthClient();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const logout = async () => {
  const cookies = useCookie("accessToken");
  cookies.value = undefined;
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo("/login");
};
</script>

<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="text-white font-bold text-xl"
            >Stock Market</router-link
          >
        </div>
        <div class="hidden md:flex items-center">
          <button @click="logout()" class="text-white mx-4">Logout</button>
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white">
            <svg
              v-if="isMenuOpen"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-if="isMenuOpen" class="md:hidden mt-4">
        <button @click="logout()" class="text-white mx-4">Logout</button>
      </div>
    </div>
  </nav>
</template>