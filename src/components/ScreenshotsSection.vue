<script setup lang="ts">
import 'swiper/css';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, } from 'swiper/modules';
import ScreenshotItem from "@/components/ScreenshotItem.vue";

const swiper = ref();
function onSwiper(_swiper) {
  swiper.value = _swiper;
}
</script>

<template>
  <section class="py-20 bg-white dark:bg-[#1a1a1a]">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-[#282828] dark:text-white">
          Podpoř vývoj...
        </h2>
        <p class="text-xl text-[#8E8E8E] dark:text-gray-400">
          a získej 👇 tyto funkce navíc.
        </p>
      </div>

      <div class="mb-16 flex flex-col gap-4">
        <div>
        <Swiper
          :loop="true"
          :space-between="24"
          :slides-per-view="1"
          :breakpoints="{
            568: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }"
          @swiper="onSwiper"
        >
          <SwiperSlide>
            <ScreenshotItem title="Tlačítko na 1. nepřečtený">
              <img src="@/assets/screen-jump.png" class="block dark:hidden">
              <img src="@/assets/screen-jump-dark.png" class="hidden dark:block">
            </ScreenshotItem>
          </SwiperSlide>
          <SwiperSlide>
            <ScreenshotItem title="NSFW 👉 SWF">
              <img src="@/assets/screen-nsfw.png" class="block dark:hidden">
              <img src="@/assets/screen-nsfw-dark.png" class="hidden dark:block">
            </ScreenshotItem>
          </SwiperSlide>
          <SwiperSlide>
            <ScreenshotItem title="Markdown">
              <img src="@/assets/screen-md.png" class="block dark:hidden">
              <img src="@/assets/screen-md-dark.png" class="hidden dark:block">
            </ScreenshotItem>
          </SwiperSlide>
          <SwiperSlide>
            <ScreenshotItem title="Uložená hledání">
              <img src="@/assets/screen-search.png" class="block dark:hidden">
              <img src="@/assets/screen-search-dark.png" class="hidden dark:block">
            </ScreenshotItem>
          </SwiperSlide>
          <SwiperSlide>
            <ScreenshotItem title="3 skiny navíc">
              <img src="@/assets/screen-skiny.png" class="block dark:hidden">
              <img src="@/assets/screen-skiny-dark.png" class="hidden dark:block">
            </ScreenshotItem>
          </SwiperSlide>
        </Swiper>
        </div>
        <nav v-if="swiper" class="flex xl:hidden justify-center items-center mt-5">
          <div class="flex items-center gap-x-2">
            <svg v-for="i in swiper?.slides?.length ?? 0" xmlns="http://www.w3.org/2000/svg" :width="swiper.activeIndex + 1 === i ? 12 : 8" :height="swiper.activeIndex + 1 === i ? 12 : 8"
                 viewBox="0 0 8 8"
                 fill="none"
                 class="dark:text-white opacity-50"
            >
              <circle cx="4" cy="4" r="4" fill="currentColor"/>
            </svg>
          </div>
        </nav>
      </div>

      <div id="premium" class="text-center mt-24">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-[#282828] dark:text-white mb-16">
          Jak podpořit?
        </h2>
        <div class="flex flex-col lg:flex-row lg:justify-center gap-y-10 lg:gap-x-10">
          <div class="w-full lg:w-1/3">
            <h2
              class="text-3xl md:text-4xl font-bold mb-4 text-center text-[#282828] dark:text-white">
              Patreon
            </h2>
            <div class="flex flex-col items-center gap-y-4">
              <p class="dark:text-gray-300">Preferované, po měsících, automatická obnova.</p>
              <a
                href="https://www.patreon.com/bePatron?u=27695214"
                target="_blank"
                class="inline-flex items-center bg-black dark:bg-white dark:text-black rounded-lg text-white p-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition"
              >
                <svg class="me-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;"
                     xml:space="preserve">
                <path d="M1033.05,324.45c-0.19-137.9-107.59-250.92-233.6-291.7c-156.48-50.64-362.86-43.3-512.28,27.2
                  C106.07,145.41,49.18,332.61,47.06,519.31c-1.74,153.5,13.58,557.79,241.62,560.67c169.44,2.15,194.67-216.18,273.07-321.33
                  c55.78-74.81,127.6-95.94,216.01-117.82C929.71,603.22,1033.27,483.3,1033.05,324.45z"
                      class="fill-white dark:fill-black"/>
                </svg>
                Stát se patronem
              </a>
              <p class="italic text-xs dark:text-gray-400">Do poznámky dejte svoje NYX ID. Do
                několika hodin vám zapnu premim funkce. Každá další platba bude již spárovaná
                automaticky a premium automaticky obnoveno.</p>
            </div>
          </div>
          <div class="w-full lg:w-1/3">
            <h2
              class="text-3xl md:text-4xl font-bold mb-4 text-center text-[#282828] dark:text-white">
              Revolut
            </h2>
            <div class="flex flex-col items-center gap-y-4">
              <p class="dark:text-gray-300">Minimálně na 6/12 měsíců, manuální zapnutí.</p>
              <div class="flex gap-x-2">
                <a href="https://revolut.me/lucien144?currency=CZK&amount=42000&note=VASE NYX ID"
                   target="_blank"
                   class="inline-flex items-center bg-black dark:bg-white dark:text-black rounded-lg text-white p-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition">
                  <svg class="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg"
                       xml:space="preserve" width="800" height="800" viewBox="0 0 800 800"
                       style="enable-background:new 0 0 800 800"><path d="M0 0h800v800H0z" style="fill:#000"/>
                    <path d="M209.051 262.097h101.445v410.21H209.051z" fill="white"/>
                    <path
                      d="M628.623 285.554c0-87.043-70.882-157.86-158.011-157.86H209.051v87.603h249.125c39.43 0 72.093 30.978 72.814 69.051.361 19.064-6.794 37.056-20.146 50.66-13.357 13.61-31.204 21.109-50.251 21.109h-97.046c-3.446 0-6.25 2.8-6.25 6.245v77.859a6.21 6.21 0 0 0 1.179 3.656l164.655 228.43h120.53L478.623 443.253c83.113-4.173 150-74.005 150-157.699z"
                      fill="white"/></svg>
                  420,-
                </a>
                <a href="https://revolut.me/lucien144?currency=CZK&amount=84000&note=VASE NYX ID"
                   target="_blank"
                   class="inline-flex items-center bg-black dark:bg-white dark:text-black rounded-lg text-white p-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition">
                  <svg class="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg"
                       xml:space="preserve" width="800" height="800" viewBox="0 0 800 800"
                       style="enable-background:new 0 0 800 800"><path d="M0 0h800v800H0z" style="fill:#000"/>
                    <path d="M209.051 262.097h101.445v410.21H209.051z" fill="white"/>
                    <path
                      d="M628.623 285.554c0-87.043-70.882-157.86-158.011-157.86H209.051v87.603h249.125c39.43 0 72.093 30.978 72.814 69.051.361 19.064-6.794 37.056-20.146 50.66-13.357 13.61-31.204 21.109-50.251 21.109h-97.046c-3.446 0-6.25 2.8-6.25 6.245v77.859a6.21 6.21 0 0 0 1.179 3.656l164.655 228.43h120.53L478.623 443.253c83.113-4.173 150-74.005 150-157.699z"
                      fill="white"/></svg>
                  840,-
                </a>
              </div>
              <p class="italic text-xs dark:text-gray-400">Do poznámky dejte svoje NYX ID.<br>Ruční
                spárování plateb většinou bývá do pár hodin.</p>
            </div>
          </div>
          <div class="w-full lg:w-1/3">
            <h2
              class="text-3xl md:text-4xl font-bold mb-4 text-center text-[#282828] dark:text-white">
              Bankovní převod
            </h2>
            <div class="flex flex-col items-center gap-y-4">
              <p class="dark:text-gray-300">Minimálně na 6/12 měsíců, manuální zapnutí.</p>
              <div class="flex gap-x-2">
                <a href="#"
                   class="inline-flex items-center bg-black dark:bg-white dark:text-black rounded-lg text-white p-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round"
                       class="lucide lucide-scan-qr-code-icon lucide-scan-qr-code">
                    <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                    <path d="M17 8V7"/>
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                    <path d="M7 17h.01"/>
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                    <rect x="7" y="7" width="5" height="5" rx="1"/>
                  </svg>
                  420,-
                </a>
                <a href="#"
                   class="inline-flex items-center bg-black dark:bg-white dark:text-black rounded-lg text-white p-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round"
                       class="lucide lucide-scan-qr-code-icon lucide-scan-qr-code">
                    <path d="M17 12v4a1 1 0 0 1-1 1h-4"/>
                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                    <path d="M17 8V7"/>
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                    <path d="M7 17h.01"/>
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                    <rect x="7" y="7" width="5" height="5" rx="1"/>
                  </svg>
                  840,-
                </a>
              </div>
              <p class="italic text-xs dark:text-gray-400">Do poznámky dejte svoje NYX ID.<br>Ruční
                spárování plateb většinou bývá do pár hodin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
