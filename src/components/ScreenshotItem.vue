<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="max-w-[40vw] lg:max-w-1/4 mx-auto">
    <h3 class="text-xl text-center font-semibold mb-2 text-[#282828]" v-text="title"/>
    <div class="bg-gradient-to-br from-[#cde5e9] to-[#76b9b9] p-2 lg:p-4 rounded-lg shadow-lg lg:rounded-2xl lg:shadow-2xl">
      <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
        <slot/>
      </div>
    </div>
  </div>
</template>
