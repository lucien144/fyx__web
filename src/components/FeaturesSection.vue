<script setup lang="ts"></script>

<template>
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
</template>