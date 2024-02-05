import { defineNitroPlugin, useRuntimeConfig } from "#imports";

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig().public.gtm;
  const IS_DEV_ENV = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  if (IS_DEV_ENV && !config?.shownInDevMode) {
    return;
  }
  if (!config || !config.id) {
    console.error("Missing GTM ID! You have to set it in your config");
    return;
  }
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.push(`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${config.id}');</script>
<!-- End Google Tag Manager -->
</script>`);
    html.bodyPrepend.push(`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${config.id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`);
  });
});
