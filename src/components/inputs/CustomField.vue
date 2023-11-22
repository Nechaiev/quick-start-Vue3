<template>
  <div>
    <custom-label
      v-if="label"
      :for="id"
      :required="required"
    >
      {{ label }}
    </custom-label>

    <slot v-bind="props" />

    <ErrorMessage v-if="error">
      {{ error }}
    </ErrorMessage>

    <HelperMessage
      class="mt-1 text-sm text-gray-500 dark:text-gray-400"
      v-if="help"
      :id="ariaDescribedBy"
    >
      {{ help }}
    </HelperMessage>
  </div>
</template>

<script setup>
import CustomLabel from "@/components/inputs/CustomLabel.vue";
import ErrorMessage from "./ErrorMessage.vue";
import HelperMessage from "./HelperMessage.vue";
import {v4 as uuid} from "uuid";
import {computed, provide} from "vue";

const props = defineProps({
  id: {
    type: String,
    default: () => `field-${uuid()}`,
  },
  label: String,
  required: Boolean,
  error: String,
  help: String,
});

const ariaDescribedBy = computed(() => {
  return !!props.help ? `help-${uuid()}` : null;
});

provide(
  "field",
  computed(() => {
    return {
      ...props,
      invalid: !!props.error,
      ariaDescribedBy: ariaDescribedBy.value,
    };
  })
);
</script>