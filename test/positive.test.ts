import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { $fetch, setup } from "@nuxt/test-utils/e2e";

describe("positive SSR", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/positive", import.meta.url)),
  });

  it("has GTM in the header", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).toContain("https://www.googletagmanager.com/gtm.js");
  });
  it("has GTM in the body", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).toContain("iframe src=\"https://www.googletagmanager.com");
  });
});
