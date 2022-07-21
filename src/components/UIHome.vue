<script setup>
import UIModal from "./UIModal.vue";
import { ref } from "vue";

let isModalOpened = ref(false);

const open = () => {
  isModalOpened.value = !isModalOpened.value;
}
</script>

<template>
  <main class="main">
    <button @click="open()">
      Открыть
    </button>

    <UIModal
      v-model="isModalOpened"
      @close="isModalOpened = false"
    />
  </main>
</template>
