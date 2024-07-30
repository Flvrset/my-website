<script>
	import { afterUpdate } from 'svelte';
	import '$lib/fonts/fonts.css';
	afterUpdate(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry);
				if (entry.isIntersecting) {
					entry.target.classList.add('show-on-scroll');
				} else {
					entry.target.classList.remove('show-on-scroll');
				}
			});
		});

		console.log('xd');
		const hiddenElements = document.querySelectorAll('.wannabe-shown-on-scroll');
		hiddenElements.forEach((element) => observer.observe(element));
	});
</script>

<slot />
