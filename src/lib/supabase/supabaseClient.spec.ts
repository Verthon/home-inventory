import { rest } from "msw";
import { server } from "src/setupTests";
import { FAKE_DOMAIN } from "src/testUtils";
import { getProducts } from "./supabaseClient";

describe("supabaseClient", () => {
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
            error: {
              message: "Server error",
              details: "",
              hint: "",
              code: "C32D",
            },
          })
        );
      }),
    );

    await expect(getProducts()).rejects.toThrow();
  });
});
