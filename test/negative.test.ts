import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { $fetch, setup } from "@nuxt/test-utils/e2e";

describe("ssr", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/negative", import.meta.url)),
  });

  it("hasn't GTM  in the header", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).not.toContain("https://www.googletagmanager.com/gtm.js");
  });
  it("hasn't GTM in the body", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).not.toContain("iframe src=\"https://www.googletagmanager.com");
  });
});
