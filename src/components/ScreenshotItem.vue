<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="lg:max-w-[40vw] mx-auto">
    <h3 class="text-xl text-center font-semibold mb-2 text-[#282828] dark:text-white" v-text="title"/>
    <div class="bg-gradient-to-br from-[#cde5e9] to-[#76b9b9] dark:from-[#0d2d36] dark:to-[#145a6a] p-2 lg:p-2.5 rounded-lg shadow-lg lg:rounded-xl lg:shadow-2xl">
      <div class="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-xl flex items-center justify-center">
        <slot/>
      </div>
    </div>
  </div>
</template>
