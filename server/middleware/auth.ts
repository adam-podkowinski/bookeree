import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  // eslint-disable-next-line no-extend-native
  BigInt.prototype.toJSON = function (): string {
    return this.toString();
  };
  const user = await serverSupabaseUser(event);
  event.context.authenticated = user !== null;
  event.context.user = user;
});
