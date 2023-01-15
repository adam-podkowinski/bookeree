import { serverSupabaseUser } from "#supabase/server";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  event.context.authenticated = user !== null;
  event.context.user = user;
});
