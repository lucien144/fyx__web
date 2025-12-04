<script setup lang="ts">
import ScreenshotItem from "@/components/ScreenshotItem.vue";
</script>

<template>
  <section class="container mx-auto px-4 py-20 flex flex-wrap lg:flex-nowrap gap-4">
    <ScreenshotItem><img src="@/assets/screenshot-01.png"></ScreenshotItem>
    <ScreenshotItem><img src="@/assets/screenshot-02.png"></ScreenshotItem>
    <ScreenshotItem><img src="@/assets/screenshot-03.png"></ScreenshotItem>
    <ScreenshotItem><img src="@/assets/screenshot-04.png"></ScreenshotItem>
  </section>
</template>
