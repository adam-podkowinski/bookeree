import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  event.context.authenticated = user !== null;
  event.context.user = user;
});
