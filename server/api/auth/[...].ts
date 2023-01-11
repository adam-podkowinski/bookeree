import Auth0Provider from "next-auth/providers/auth0";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error .default to work during SSR
    Auth0Provider.default({
      clientId: useRuntimeConfig().clientId,
      clientSecret: useRuntimeConfig().clientSecret,
      issuer: useRuntimeConfig().public.issuer,
    }),
  ],
});
