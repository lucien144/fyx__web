<script setup lang="ts"></script>

<template>
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
</template>