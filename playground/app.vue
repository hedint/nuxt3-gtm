<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
import { useGtm } from "#imports";

if (process.server) {
  const gtm = useGtm();
  gtm.pushData({
    event: "test",
    data: "myData",
  });
}
</script>
