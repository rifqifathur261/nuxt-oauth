export default defineNuxtRouteMiddleware((to, from) => {
  const route = useRoute();
  const cookies = useCookie("accessToken");
  // console.log("toktok euy", route?.hash);

  const rgx = /(?<==).+?(?=&)/;

  // console.log("cookies.value ", cookies.value);
  if (route?.hash) {
    // console.log("cookies.value ", cookies.value);
    try {
      let rawToken = route?.hash?.match(rgx);
      cookies.value = rawToken[0];
      navigateTo("/");
    } catch (error) { }
  }

  if (!cookies.value) {
    return navigateTo("/login");
  }
});
