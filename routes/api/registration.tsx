import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(_req: Request, _ctx: FreshContext) {
    return new Response("Register");
  },
};
