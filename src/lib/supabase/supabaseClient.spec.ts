import { rest } from "msw";
import { server } from "src/setupTests";
import { FAKE_AUTH_DOMAIN, FAKE_DOMAIN } from "src/testUtils";
import { addProduct, getBoxes, getProductCategories, getProducts, getUser, login } from "./supabaseClient";

const genericError = {
  message: "Server error",
  details: "",
  hint: "",
  code: "C32D",
}

describe("supabaseClient", () => {
  describe('getProducts', () => {
    it("should get the data and set status correctly", async () => {
      const data = await getProducts();
  
      expect(data).toBeDefined();
    });
  
    it("should throw an error in case getProducts api call fail(required for React Query to handle error properly)", async () => {
      server.use(
        rest.get(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              data: null,
              error: genericError,
            })
          );
        }),
      );
  
      await expect(getProducts()).rejects.toThrow();
    });
  })
  describe('getProductCategories', () => {
    it("should get the data and set status correctly", async () => {
      const data = await getProductCategories();
  
      expect(data).toBeDefined();
    });
  
    it("should throw an error in case getProductCategories api call fail(required for React Query to handle error properly)", async () => {
      server.use(
        rest.get(`${FAKE_DOMAIN}/categories`, (_req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              data: null,
              error: genericError,
            })
          );
        }),
      );
  
      await expect(getProductCategories()).rejects.toThrow();
    });
  })
  describe('getBoxes', () => {
    it("should get the data and set status correctly", async () => {
      const data = await getBoxes();
  
      expect(data).toBeDefined();
    });
  
    it("should throw an error in case getBoxes api call fail(required for React Query to handle error properly)", async () => {
      server.use(
        rest.get(`${FAKE_DOMAIN}/boxes`, (_req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              data: null,
              error: genericError,
            })
          );
        }),
      );
  
      await expect(getBoxes()).rejects.toThrow();
    });
  })

  describe("addProduct", () => {
    const payload = { expiry_date: '2022-11-12', quantity: 2, category_id: 1, short_description: 'test', name: 'testName' }
    it("should post the data and set status correctly", async () => {
      const data = await addProduct(payload);
  
      expect(data).toBeDefined();
    });
  
    it("should throw an error in case addProduct api call fail(required for React Query to handle error properly)", async () => {
      server.use(
        rest.post(`${FAKE_DOMAIN}/products`, (_req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              data: null,
              error: genericError,
            })
          );
        }),
      );
  
      await expect(addProduct(payload)).rejects.toThrow();
    });
  })

  describe('login', () => {
    const payload = { email: 'my-email@test.pol', password: 'admin1234' }
    it("should post the data and set status correctly", async () => {
      const data = await login(payload);
  
      expect(data).toBeDefined();
    });
  
    it("should throw an error in case addProduct api call fail(required for React Query to handle error properly)", async () => {
      server.use(
        rest.post(`${FAKE_AUTH_DOMAIN}/token`, (_req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              data: null,
              error: genericError,
            })
          );
        }),
      );
  
      await expect(login(payload)).rejects.toThrow();
    });
  })

  describe('get user', () => {
    it('should return current user', () => {
      const user = getUser();
  
      expect(user).toEqual(null)
    })
  })
});
