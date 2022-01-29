<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="
      bg-white bg
      mx-auto
      max-w-2xl
      rounded-lg
      mt-10
      shadow-cyan-500 shadow-2xl
      space-y-6
      border border-blue-800
    "
  >
    <div class="text-center">
      <h1 class="text-red-700 text-3xl font-serif font-bold">Booking Form</h1>
    </div>
    <div class="mx-4">
      <input
        type="text"
        placeholder="          Enetr your full name"
        class="ring-2 focus:ring-2 w-full h-10 rounded"
      />
    </div>
    <div class="mx-4">
      <input
        type="number"
        placeholder="          Enetr your Age "
        class="ring-2 focus:ring-2 h-10 w-full rounded"
      />
    </div>
    <div class="mx-4">
      <input
        type="datetime-local"
        placeholder="          Enetr your Date and Time"
        class="ring-2 focus:ring-2 h-10 w-full rounded"
      />
    </div>
    <div class="mx-4 space-x-12">
      <p>what card did you use?</p>
      <input type="radio" name="Telesom" value="telesom" class="w-12" />
      <label
        for="Telesom"
        class="text-1xl font-semibold text-green-500 first-letter:text-blue-300"
        >Zaad</label
      >
      <input type="radio" name="Telesom" value="somtel" />
      <label for="Somtel" class="text-1xl font-semibold text-orange-400"
        >E-Dahab</label
      >
    </div>

    <div class="text-center py-8">
      <Router-link to="/Home" class="book">Book</Router-link>
    </div>
  </div>
  <!-- --save-dev -->
</template>