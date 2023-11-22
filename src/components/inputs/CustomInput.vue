<template>
  <input
    :id="field.id"
    :aria-describedby="field.ariaDescribedBy"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :required="field.required"
    :class="[
      'h-10 text-sm placeholder-gray-400 hover:bg-gray-100 border-2 w-full rounded focus:border-blue-500 focus:ring-0 focus:bg-white px-1.5',
      field.invalid ? 'border-red-500' : 'border-gray-300',
    ]"
  />
</template>

<script setup>
import {inject} from "vue";

const props = defineProps({
  id: String,
  modelValue: [String, Number],
  required: Boolean,
  invalid: Boolean,
  ariaDescribedBy: String,
});

const emit = defineEmits(["update:modelValue"]);

const field = inject("field", props);
</script>