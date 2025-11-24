<script setup lang="ts"></script>

<template>
  <section id="premium" class="bg-[#f0f4f5] py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-[#282828]">
          Free vs Premium
        </h2>
        <p class="text-xl text-[#8E8E8E]">
          Základní verze je zdarma. Premium podporuje vývoj aplikace.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <!-- Table Header -->
          <div class="grid grid-cols-3 bg-gradient-to-r from-[#1AD592] to-[#196378] text-white">
            <div class="p-6 border-r border-white/20">
              <h3 class="text-2xl font-bold">Funkce</h3>
            </div>
            <div class="p-6 border-r border-white/20 text-center">
              <h3 class="text-2xl font-bold mb-2">Free</h3>
              <p class="text-3xl font-bold mb-1">0 Kč</p>
              <p class="text-sm text-white/70">Navždy zdarma</p>
            </div>
            <div class="p-6 text-center relative">
              <div class="absolute top-2 right-2 bg-[#FFC107] text-[#282828] px-3 py-1 rounded-full text-xs font-bold">
                PODPORA
              </div>
              <h3 class="text-2xl font-bold mb-2">Premium</h3>
              <p class="text-3xl font-bold mb-1">Custom</p>
              <p class="text-sm text-white/70">Jakákoli částka</p>
            </div>
          </div>

          <!-- Table Rows -->
          <div class="divide-y divide-gray-200">
            <!-- Row 1 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Všechny základní funkce Nyxu</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 2 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Push notifikace</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 3 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Dark mode a skiny</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 4 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Galerie obrázků a videa</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 5 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Pošta, hledání, tržiště</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 6 -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">iPad podpora</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#4CAF50] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 7 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-[#cde5e9]">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Podpora dalšího vývoje</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#AAAAAA] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#196378] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 8 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-[#cde5e9]">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Prioritní podpora</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#AAAAAA] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#196378] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 9 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-[#cde5e9]">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Exkluzivní funkce v budoucnu</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#AAAAAA] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#196378] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <!-- Row 10 - Premium Only -->
            <div class="grid grid-cols-3 hover:bg-gray-50 transition bg-[#cde5e9]">
              <div class="p-6 border-r border-gray-200">
                <span class="text-[#282828] font-medium">Poděkování v aplikaci ❤️</span>
              </div>
              <div class="p-6 border-r border-gray-200 text-center">
                <svg class="w-8 h-8 text-[#AAAAAA] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              <div class="p-6 text-center">
                <svg class="w-8 h-8 text-[#196378] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <a href="http://patreon.com/fyxapp" target="_blank" class="block w-full bg-gradient-to-r from-[#1AD592] to-[#196378] text-white py-3 rounded-xl font-semibold hover:from-[#17c085] hover:to-[#145a6a] transition text-center">
                Přejít na Patreon
              </a>
              <p class="text-center mt-2 text-sm text-[#8E8E8E]">
                nebo bankovním převodem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>