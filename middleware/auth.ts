export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  console.log("user", user.value);

  // if (!user.value) {
  //   return navigateTo("/login");
  // }
});
