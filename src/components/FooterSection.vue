<script setup lang="ts">
</script>

<template>
  <footer class="bg-[#282828] text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <img src="@/assets/app_icon.png" class="rounded-lg shadow-lg w-10">
            <span class="text-xl font-bold">Fyx</span>
          </div>
          <p class="text-[#8E8E8E]">
            Neoficiální klient pro Nyx.cz. Open-source a zdarma.
          </p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Odkazy</h4>
          <ul class="space-y-2 text-[#8E8E8E]">
            <li><a href="https://github.com/lucien144/fyx" class="hover:text-white transition">GitHub</a></li>
            <li><a href="https://github.com/lucien144/fyx/projects/2" class="hover:text-white transition">Roadmapa</a></li>
            <li><a href="https://www.nyx.cz/index.php?l=topic;id=24237" class="hover:text-white transition">Klub na Nyxu</a></li>
            <li><a href="https://forms.gle/V8Nn2WWVVotHe6DS7" class="hover:text-white transition">Nahlásit chybu</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Podpora</h4>
          <ul class="space-y-2 text-[#8E8E8E]">
            <li><a href="https://donate.stripe.com/5kQfZg6ldbCn9FdeED1RC00" class="hover:text-white transition">Stripe</a></li>
            <li><a href="http://patreon.com/fyxapp" class="hover:text-white transition">Patreon</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 text-center text-[#8E8E8E]">
        <p>&copy; {{new Date().getFullYear()}} Fyx. Vytvořil <a href="https://144.wtf" target="_blank" class="hover:text-white transition">Lucien144</a>.</p>
        <p class="mt-2 text-sm">Open-source projekt • <a href="https://github.com/lucien144/fyx" class="hover:text-white transition">Přispějte na GitHubu</a></p>
      </div>
    </div>
  </footer>
</template>
