<script setup lang="ts">


</script>


<template>
     <ul class="hidden md:flex space-x-2 items-center">
          <li>
            <RouterLink to="/Home" class="nav-item">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/About" class="nav-item">Doctors</RouterLink>
          </li>
          <li>
            <RouterLink to="/About" class="nav-item">Contact</RouterLink>
          </li>
        </ul>
      

      <div class="hidden md:flex space-x-2 ml-32">
        <RouterLink to="/login" class="buttonlog">Login</RouterLink>
        <RouterLink to="/signup" class="button">Signup</RouterLink>
      </div>
</template>

<style>


</style>