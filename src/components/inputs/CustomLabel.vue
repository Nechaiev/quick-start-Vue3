<template>
  <label
    class="mb-1 inline-block text-xs font-semibold text-gray-500"
    :for="labelFor"
  >
    <slot/>
    <span
      class="text-red-600"
      v-if="required"
    >
      *</span
    >
  </label>
</template>

<script setup>
const props = defineProps({
  labelFor: String,
  required: Boolean,
});
</script>