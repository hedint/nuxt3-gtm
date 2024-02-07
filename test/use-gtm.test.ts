import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { createPage, setup } from "@nuxt/test-utils/e2e";

describe("use GTM", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/use-gtm", import.meta.url)),
  });

  it("push event", async () => {
    const page = await createPage("/");
    const dataLayer = await page.evaluate(() => {
      return window.dataLayer;
    });
    expect(dataLayer).toContainEqual({ event: "test", data: "myData" });
  });
});
