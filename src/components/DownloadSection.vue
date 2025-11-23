<script setup lang="ts"></script>

<template>
  <section class="container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Stáhněte si Fyx ještě dnes
      </h2>
      <p class="text-xl text-gray-600 mb-10">
        Připojte se k tisícům uživatelů, kteří již používají Fyx
      </p>

      <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <a href="https://apps.apple.com/cz/app/fyx-pro-nyx-cz/id1507921589" class="group bg-black text-white px-10 py-5 rounded-2xl font-semibold flex items-center justify-center hover:bg-gray-900 transition shadow-lg hover:shadow-xl">
          <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs">Stáhnout v</div>
            <div class="text-xl font-bold">App Store</div>
          </div>
        </a>

        <a href="#" class="group bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-semibold flex items-center justify-center hover:from-green-600 hover:to-green-700 transition shadow-lg hover:shadow-xl">
          <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs">Získat na</div>
            <div class="text-xl font-bold">Google Play</div>
          </div>
        </a>
      </div>

      <div class="bg-gray-100 rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-900">Podpořte vývoj</h3>
        <p class="text-gray-600 mb-6">
          Fyx je open-source projekt vytvářený ve volném čase. Vaše podpora pomáhá pokračovat ve vývoji.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="http://patreon.com/fyxapp" target="_blank" class="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition">
            Patreon
          </a>
          <a href="https://www.nyx.cz/index.php?l=topic;l2=2;id=24237;n=6162" target="_blank" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Bankovní převod
          </a>
          <a href="https://github.com/lucien144/fyx" target="_blank" class="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>