import { rest } from 'msw';

export const FAKE_DOMAIN = 'https://sjngbjrbimlskuxzflby.supabase.co/rest/v1';

export const handlers = [
  rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: [] }));
  }),
  rest.get(`${FAKE_DOMAIN}/categories`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  })
]