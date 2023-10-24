import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  getUsers: t.procedure.query(({ ctx }) => {
    return "Hello";
  }),
});

export type AppRouter = typeof appRouter;
