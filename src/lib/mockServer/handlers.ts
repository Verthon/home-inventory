import { HttpResponse, http } from 'msw'
import { session } from 'src/fixtures/auth/session'
import { boxesList } from 'src/fixtures/boxes/boxes'
import { categoriesList } from 'src/fixtures/categories/categories'
import { productsList } from 'src/fixtures/products/productsList'

const FAKE_DOMAIN = 'https://sjngbjrbimlskuxzflby.supabase.co/rest/v1'
const FAKE_AUTH_DOMAIN = 'https://sjngbjrbimlskuxzflby.supabase.co/auth/v1'

export const handlers = [
  http.get(`${FAKE_DOMAIN}/products`, () => {
    return HttpResponse.json([...productsList])
  }),
  http.get(`${FAKE_DOMAIN}/categories`, () => {
    return HttpResponse.json([...categoriesList])
  }),
  http.get(`${FAKE_DOMAIN}/boxes`, () => {
    return HttpResponse.json([...boxesList])
  }),
  http.post(`${FAKE_DOMAIN}/products`, () => {
    return new HttpResponse('Product created', { status: 201 })
  }),
  http.post(`${FAKE_AUTH_DOMAIN}/token`, () => {
    return HttpResponse.json({
      ...session,
    })
  }),
  http.post(`${FAKE_AUTH_DOMAIN}/recover`, () => {
    return new HttpResponse('Recover sent', { status: 201 })
  }),
]
