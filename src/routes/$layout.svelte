<script>
	import Header from './../components/Header.svelte';
	import "../global.css";
	import Footer from './../components/Footer.svelte';
	// import resolveConfig from 'tailwindcss/resolveConfig';
	// import * as tailwindConfig from '../../tailwind.config';
	// const fullConfig = resolveConfig(tailwindConfig);

</script>

<Header></Header>
<slot />
<Footer></Footer>

<style>
	:global(body) {
		background-color: #f5f6f6;
		color: #0084f6;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>