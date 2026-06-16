<script setup lang="ts"></script>
<template>
	<div class="flex flex-col h-screen">
		<header class="h-14 flex items-center justify-center bg-secondary/50">
			Header
		</header>
		<main class="flex-1">
			<slot />
		</main>
		<footer class="h-10 flex items-center justify-center bg-amber-800/50">
			Footer
		</footer>
	</div>
</template>
