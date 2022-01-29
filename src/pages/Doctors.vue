<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
<div class="text-center">
    <h1 class="text-3xl text-pink-600 ">Doctors</h1>
</div>
<div class="grid md:grid-cols-4 space-y-3 mx-4 mt-12 ">
<div class="bg-cyan-400  w-72 rounded-lg shadow-2xl  relative ">
	<img src="./images.jfif" alt="" class=" w-full px-2 h-44 py-2 rounded hover:scale-90 transition">


<div class="ml-2 mt-6">
<p class="text-white text-center font-serif font-bold ">dental Specialty </p>
<p> ipsum dolor sit amet i praesentium architecto! Mollitia, id adn abdi.</p></div>
<div class="mt-10"></div>
<Router-link to="/Doctorform" class="book">Book</Router-link>
<div class="bg"></div>
</div>
<div class="bg-cyan-400 h-96 w-72 rounded-lg shadow-2xl relative ">
	<img src="./download.jfif" alt="" class=" w-full px-2 h-44 py-2 rounded object-cover hover:scale-95 transition">


<div class="ml-2 mt-6">
<p class="text-white text-center font-serif font-bold ">dental Specialty </p>
<p> ipsum dolor sit amet i praesentium architecto! Mollitia, id ad.</p></div>
<div class="mt-10"></div>
<Router-link to="/Home" class="book">Book</Router-link>
</div>

<div class="bg-cyan-400 h-96 w-72 rounded-lg shadow-2xl relative ">
	<img src="./images.jfif" alt="" class=" w-full px-2 h-44 py-2 rounded object-cover hover:scale-95 transition">


<div class="ml-2 mt-6">
<p class="text-white text-center font-serif font-bold ">dental Specialty </p>
<p> ipsum dolor sit amet i praesentium architecto! Mollitia, id ad.</p></div>
<div class="mt-10"></div>
<Router-link to="/Home" class="book">Book</Router-link>

</div>
<div class="bg-cyan-400 h-96 w-72 rounded-lg shadow-2xl relative ">
	<img src="./doctor3.jfif" alt="" class=" w-full px-2 h-44 py-2 rounded object-cover hover:scale-95 transition">


<div class="ml-2 mt-6">
<p class="text-white text-center font-serif font-bold ">dental Specialty </p>
<p> ipsum dolor sit amet i praesentium architecto! Mollitia, id ad.</p></div>
<div class="mt-10"></div>
<Router-link to="/Home" class="book">Book</Router-link>

</div>
</div>
<div class="bg-cyan-600 mt-8 grid sm:grid  md:grid grid-cols-4">
	<div class="mt-6">
		<h1 class="py-4 text-transparent text-5xl mt-4 bg-clip-text font-bold bg-gradient-to-r from-pink-600 to-blue-800 hover:">Doctor App</h1>
</div>
<div class="space-y-4 text-white mt-8">
	<h1 class="text-2xl font-bold  ">Contact Us</h1>
<p class="flex"><img src="https://img.icons8.com/ios-glyphs/50/000000/facebook.png"/>facebook</p>
<p class="flex"><img src="https://img.icons8.com/ios-glyphs/50/000000/instagram-new.png"/>instigram</p>
<p class="flex"><img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v2.png" class="h-14">Twitter</p>
<p class="flex"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" class="h-14">Linkidin</p>
	
	</div>
	<div class="text-white mt-8 ">
	<h1 class="font-bold text-xl">Contact Us</h1>
	<div class="space-y-10 mt-4">
	<p>+252634512911</p>
	<p>+252659964938</p>
	<p>+252659964938</p></div>
	</div>
	<div class="text-white mt-8 ">
		<h1 class="text-2xl font-bold ">Regester</h1>
			<div class="space-y-10 mt-4">
		<p>login</p>
		<p>Sign Up</p></div>
	</div>
</div>


	
</template>
