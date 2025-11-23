<script setup lang="ts"></script>

<template>
  <header class="gradient-bg text-white">
    <nav class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <img src="@/assets/app_icon.png" class="rounded-2xl shadow-lg">
          </div>
          <span class="text-2xl font-bold">Fyx</span>
        </div>
        <a href="#premium" class="bg-white text-[#196378] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
          Premium
        </a>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-20 text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">
        Fyx pro Nyx.cz
      </h1>
      <p class="text-xl md:text-2xl mb-10 text-[#cde5e9] max-w-2xl mx-auto">
        Fyx je neoficiální klient pro diskuzní server Nyx.cz.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://apps.apple.com/cz/app/fyx-pro-nyx-cz/id1507921589" class="bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-gray-900 transition">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          App Store
        </a>
        <a href="#" class="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-gray-100 transition">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          Google Play
        </a>
      </div>
      <p class="mt-6 text-[#cde5e9]">
        ⭐ 4.8/5 hodnocení • Zdarma ke stažení
      </p>
    </div>
  </header>

  <!-- Screenshot Section -->
  <section class="container mx-auto px-4 py-20 flex gap-x-4">
    <div class="max-w-sm mx-auto">
      <div class="bg-gradient-to-br from-[#cde5e9] to-[#76b9b9] rounded-2xl p-4 shadow-2xl">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
          <img src="@/assets/screenshot-01.png">
        </div>
      </div>
    </div>
    <div class="max-w-sm mx-auto">
      <div class="bg-gradient-to-br from-[#cde5e9] to-[#76b9b9] rounded-2xl p-4 shadow-2xl">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
          <img src="@/assets/screenshot-02.png">
        </div>
      </div>
    </div>
    <div class="max-w-sm mx-auto">
      <div class="bg-gradient-to-br from-[#cde5e9] to-[#76b9b9] rounded-2xl p-4 shadow-2xl">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
          <img src="@/assets/screenshot-03.png">
        </div>
      </div>
    </div>
    <div class="max-w-sm mx-auto">
      <div class="bg-gradient-to-br from-[#cde5e9] to-[#76b9b9] rounded-2xl p-4 shadow-2xl">
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
          <img src="@/assets/screenshot-04.png">
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Funkce, které oceníte
      </h2>
      <p class="text-xl text-gray-600">
        Vše, co potřebujete pro pohodlné používání Nyxu
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="w-12 h-12 bg-[#cde5e9] rounded-xl flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[#196378]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900">Push notifikace</h3>
        <p class="text-gray-600">Nechte si posílat notifikace o nových příspěvcích přímo do telefonu</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="w-12 h-12 bg-[#cde5e9] rounded-xl flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[#196378]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900">Dark mode & Skiny</h3>
        <p class="text-gray-600">Dark mode, Forest4, Graymatter a další oblíbené skiny</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="w-12 h-12 bg-[#cde5e9] rounded-xl flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[#196378]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900">Rychlá navigace</h3>
        <p class="text-gray-600">Odskok na první nepřečtený příspěvek a kompaktní mód</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="w-12 h-12 bg-[#cde5e9] rounded-xl flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[#196378]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900">Multimédia</h3>
        <p class="text-gray-600">Galerie více obrázků, přehrávání videí přímo v aplikaci</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="w-12 h-12 bg-[#cde5e9] rounded-xl flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[#196378]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900">Ankety & Spoilery</h3>
        <p class="text-gray-600">Plná podpora anket a spoilerů přímo v aplikaci</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="w-12 h-12 bg-[#cde5e9] rounded-xl flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-[#196378]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900">iPad podpora</h3>
        <p class="text-gray-600">Optimalizováno pro iPad s podporou landscape režimu</p>
      </div>
    </div>
  </section>

  <!-- Comparison Section -->
  <section id="premium" class="bg-gray-100 py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Free vs Premium
        </h2>
        <p class="text-xl text-gray-600">
          Základní verze je zdarma. Premium podporuje vývoj aplikace.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <!-- Table Header -->
          <div class="grid grid-cols-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
            <div class="p-6 border-r border-purple-500">
              <h3 class="text-2xl font-bold">Funkce</h3>
            </div>
            <div class="p-6 border-r border-purple-500 text-center">
              <h3 class="text-2xl font-bold mb-2">Free</h3>
              <p class="text-3xl font-bold mb-1">0 Kč</p>
              <p class="text-sm text-purple-200">Navždy zdarma</p>
            </div>
            <div class="p-6 text-center relative">
              <div class="absolute top-2 right-2 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-xs font-bold">
                PODPORA
              </div>
              <h3 class="text-2xl font-bold mb-2">Premium</h3>
              <p class="text-3xl font-bold mb-1">Custom</p>
              <p class="text-sm text-purple-200">Jakákoli částka</p>
            </div>
          </div>

          <!-- Table Rows -->
          <div class="divide-y divide-gray-200">
            <!-- Row 1 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Všechny základní funkce Nyxu</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 2 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Push notifikace</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 3 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Dark mode a skiny</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 4 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Galerie obrázků a videa</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 5 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Pošta, hledání, tržiště</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 6 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">iPad podpora</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 7 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-purple-50">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Podpora dalšího vývoje</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 8 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-purple-50">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Prioritní podpora</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 9 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-purple-50">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Exkluzivní funkce v budoucnu</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 10 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-purple-50">
              <div class="p-6 border-r border-gray-200">
                <span class="text-gray-900 font-medium">Poděkování v aplikaci ❤️</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Table Footer with CTA Buttons -->
          <div class="grid grid-cols-3 bg-gray-50 border-t-2 border-gray-200">
            <div class="p-6 border-r border-gray-200"></div>
            <div class="p-6 border-r border-gray-200">
              <button class="w-full bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold cursor-not-allowed">
                Již používáte
              </button>
            </div>
            <div class="p-6">
              <a href="http://patreon.com/fyxapp" target="_blank" class="block w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-900 transition text-center">
                Přejít na Patreon
              </a>
              <p class="text-center mt-2 text-sm text-gray-600">
                nebo bankovním převodem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Download Section -->
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

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-[#196378] rounded-xl flex items-center justify-center">
              <span class="text-xl font-bold">F</span>
            </div>
            <span class="text-xl font-bold">Fyx</span>
          </div>
          <p class="text-gray-400">
            Neoficiální klient pro Nyx.cz vytvořený komunitou. Open-source a zdarma.
          </p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Odkazy</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="https://github.com/lucien144/fyx" class="hover:text-white transition">GitHub</a></li>
            <li><a href="https://github.com/lucien144/fyx/projects/2" class="hover:text-white transition">Roadmapa</a></li>
            <li><a href="https://www.nyx.cz/index.php?l=topic;id=24237" class="hover:text-white transition">Klub na Nyxu</a></li>
            <li><a href="https://github.com/lucien144/fyx/issues" class="hover:text-white transition">Nahlásit chybu</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Podpora</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="http://patreon.com/fyxapp" class="hover:text-white transition">Patreon</a></li>
            <li><a href="https://www.nyx.cz/index.php?l=topic;l2=2;id=24237;n=6162" class="hover:text-white transition">Bankovní převod</a></li>
            <li class="text-sm pt-2">Bitcoin:<br><span class="text-xs">bc1q6m0ptsg3z4u6296m9kqfl4adylt9kxkafw94ul</span></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Fyx. Vytvořil Jan Blasko (Lucien). Neoficiální klient pro Nyx.cz</p>
        <p class="mt-2 text-sm">Open-source projekt • <a href="https://github.com/lucien144/fyx" class="hover:text-white transition">Přispějte na GitHubu</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
