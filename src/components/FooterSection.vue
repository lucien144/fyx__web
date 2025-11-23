<script setup lang="ts"></script>

<template>
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