<template>
  <component
    :is="as"
    :disabled="disabled"
    :class="buttonClass"
  >
    <my-loader v-if="loading"/>
    <component
      :is="iconLeft"
      :class="loadingClass"
      class="mr-2 h-5 w-5"
    />

    <span :class="loadingClass">
      <slot/>
    </span>
    <span v-if="!loading && (iconRight || $slots.iconRight) " class="ml-2 h-5 w-5">
      <slot name="iconRight">
        <component
          :is="iconRight"
        />
      </slot>
    </span>
  </component>
</template>

<script setup>
import {computed} from "vue";
import {cva} from "class-variance-authority";
import MyLoader from "@/components/buttons/MyLoader.vue";
// npm i class-variance-authority

const props = defineProps({
  iconLeft: [Object, Function],
  iconRight: [Object, Function],
  loading: Boolean,
  disabled: Boolean,
  as: {
    type: [String, Object],
    default: "button",
  },
  intent: {
    type: String,
    validator: (val) => ["primary", "secondary", "danger", "text"].includes(val),
    default: "secondary",
  },
});

const buttonClass = computed(() => {
  return cva("inline-flex items-center justify-center text-sm rounded min-h-[32px] px-3 py-0.5 font-semibold", {
    variants: {
      intent: {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-black/5 hover:bg-black/10 text-gray-700",
        danger: "bg-red-600 text-white hover:bg-red-500",
        text: "text-gray-700 hover:bg-black/5",
      },
      disabled: {
        true: "!bg-gray-100 !text-gray-400 cursor-not-allowed",
      },
    },
  })({
    intent: props.intent,
    disabled: props.disabled,
  });
});

const loadingClass = computed(() => props.loading && 'invisible')
</script>