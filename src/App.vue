
<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { RouterView,RouterLink} from 'vue-router';
import NavBar from './components/Nav-bar.vue';



</script>

<template >
 
<Nav-bar />

  <div class="py-10"></div>
 

  <RouterView />

  <!-- Footer will go here -->
 
</template>


