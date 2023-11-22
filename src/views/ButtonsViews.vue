<template>
  <div class="">
    <div class="flex gap-5 ">
      <custom-button :icon-left="BeakerIcon" intent="primary">primary</custom-button>
      <custom-button :icon-right="BeakerIcon" intent="secondary">secondary</custom-button>
      <custom-button intent="secondary">
        secondary
        <template #iconRight>
          RRRRRRRRRRRR
        </template>
      </custom-button>
      <custom-button loading intent="danger">secondary</custom-button>
      <custom-button disabled intent="text">disabled</custom-button>
    </div>
  </div>
</template>

<script setup>
import {BeakerIcon} from '@heroicons/vue/24/solid'
import CustomButton from "@/components/buttons/CustomButton.vue";

</script>