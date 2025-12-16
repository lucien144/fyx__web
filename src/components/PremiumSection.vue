<script setup lang="ts">
import PremiumItem from "@/components/PremiumItem.vue";
import {jump} from "@/helpers.ts";
</script>

<template>
  <section id="premium" class="bg-[#f0f4f5] dark:bg-[#1a1a1a] py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-[#282828] dark:text-white">
          Proč podpořit vývoj?
        </h2>
        <p class="text-xl text-[#8E8E8E] dark:text-gray-400">
          Základní verze je zdarma, s podporou dostanete funkce navíc.<br>Nové funkce navíc můžou být nějakou dobu také jen pro podporovatele...
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center text-[#282828] dark:text-white">
          Funkce Fyxu
        </h2>

        <div class="bg-white dark:bg-[#282828] rounded-3xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden">
          <!-- Table Header -->
          <div class="grid grid-cols-3 bg-gradient-to-r from-[#1AD592] to-[#196378] dark:from-[#0d8f60] dark:to-[#0d2d36] text-white">
            <div class="p-6 border-r border-white/20">
              <h3 class="text-2xl font-bold">Funkce</h3>
            </div>
            <div class="p-6 border-r border-white/20 text-center">
              <p class="text-3xl font-bold mb-1">0,-</p>
              <p class="text-sm text-white/70">Pro každého</p>
            </div>
            <div class="p-6 text-center relative">
              <div class="absolute top-2 right-2 bg-[#FFC107] dark:bg-[#FFD54F] text-[#282828] dark:text-black px-3 py-1 rounded-full text-xs font-bold">
                PODPORA
              </div>
              <p class="text-3xl font-bold mb-1">840,- / rok</p>
              <p class="text-sm text-white/70">Pouze podporovatele</p>
            </div>
          </div>

          <!-- Table Rows -->
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <PremiumItem :is-free="true">Kluby</PremiumItem>
            <PremiumItem :is-free="true">Pošta</PremiumItem>
            <PremiumItem :is-free="true">Tržiště</PremiumItem>
            <PremiumItem :is-free="true">Poslední</PremiumItem>
            <PremiumItem :is-free="true">Spoilery</PremiumItem>
            <PremiumItem :is-free="true">Ankety</PremiumItem>
            <PremiumItem :is-free="true">Základní skin s darkmode</PremiumItem>
            <PremiumItem :is-free="true">Automatický odskok na 1. nepřečtený</PremiumItem>
            <PremiumItem :is-free="true">Podpora pro tablety</PremiumItem>
            <PremiumItem :is-free="true">Notifikace</PremiumItem>
            <PremiumItem :is-free="true">Nastavení písma</PremiumItem>
            <PremiumItem>Podpora Markdownu</PremiumItem>
            <PremiumItem>Uložená hledání</PremiumItem>
            <PremiumItem>Tlačítko odskoku na 1. nepřečtený</PremiumItem>
            <PremiumItem>Více skinů (Forest, ...)</PremiumItem>
            <PremiumItem>NSFW kluby</PremiumItem>
          </div>

          <!-- Table Footer with CTA Buttons -->
          <div class="grid grid-cols-3 bg-gray-50 dark:bg-[#1a1a1a] border-t-2 border-gray-200 dark:border-gray-700">
            <div class="p-6 border-r border-gray-200 dark:border-gray-700"></div>
            <div class="p-6 border-r border-gray-200 dark:border-gray-700">
              <button @click="jump('download')" class="w-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-3 rounded-xl font-semibold cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600 transition">
                Stáhnout
              </button>
            </div>
            <div class="p-6">
              <a href="https://donate.stripe.com/5kQfZg6ldbCn9FdeED1RC00" target="_blank" class="block w-full bg-gradient-to-r from-[#1AD592] to-[#196378] dark:from-[#0d8f60] dark:to-[#0d2d36] text-white py-3 rounded-xl font-semibold hover:from-[#17c085] hover:to-[#145a6a] dark:hover:from-[#0a7a51] dark:hover:to-[#0a242b] transition text-center">
                Podpořit Fyx!
              </a>
              <p class="text-center mt-2 text-sm text-[#8E8E8E] dark:text-gray-400">
                zajišťuje Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
