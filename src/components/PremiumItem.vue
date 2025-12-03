<script setup lang="ts">
defineProps<{
  isFree?: bool
}>()
</script>
<template>
  <!-- Row 7 - Premium Only -->
  <div class="grid grid-cols-3 hover:bg-gray-50 transition" :class="{'bg-[#cde5e9]': !isFree}">
    <div class="p-6 border-r border-gray-200">
      <span class="text-[#282828] font-medium"><slot/></span>
    </div>
    <div class="p-6 border-r border-gray-200 text-center">
      <svg v-if="isFree" class="w-8 h-8 text-[#196378] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <svg v-else class="w-8 h-8 text-[#AAAAAA] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
    <div class="p-6 text-center">
      <svg class="w-8 h-8 text-[#196378] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
    </div>
  </div>
</template>
