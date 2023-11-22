<template>
  <form
    class="mx-auto w-full max-w-md space-y-4 p-4"
    @submit.prevent="submit"
  >
    <custom-field
      label="Name"
      required
      :error="errors.name"
    >
      <custom-input
        v-model="formData.name"
        placeholder="Jon Snow"
        type="text"
      />
    </custom-field>

    <custom-field
      label="Email"
      required
      :error="errors.email"
    >
      <custom-input
        v-model="formData.email"
        placeholder="jon@snow.com"
        type="email"
      />
    </custom-field>

    <custom-field
      label="Password"
      required
      :error="errors.password"
      help="Sould be at least 8 characters long."
    >
      <custom-input
        v-model="formData.password"
        type="password"
      />
    </custom-field>

    <div class="flex justify-end">
      <custom-button intent="primary">Register</custom-button>
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";
import CustomField from "@/components/inputs/CustomField.vue";
import CustomInput from "@/components/inputs/CustomInput.vue";
import CustomButton from "@/components/buttons/CustomButton.vue";

const formData = ref({
  name: "",
  email: "",
  password: "",
});

const errors = ref({});

function submit() {
  errors.value = {
    name: "Name is invalid because...",
    email: "Email is invalid because...",
    password: "Password is invalid because...",
  };

  console.log(formData.value);
}
</script>
