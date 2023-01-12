export default defineNuxtRouteMiddleware(() => {
  // eslint-disable-next-line no-extend-native
  BigInt.prototype.toJSON = function (): string {
    return this.toString();
  };
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo("/");
  }
});
