<script>
	import Header from './../components/Header.svelte';
	import "../global.css";
	import Footer from './../components/Footer.svelte';
	import resolveConfig from 'tailwindcss/resolveConfig';
	// import * as tailwindConfig from '../../tailwind.config.cjs';
	// const fullConfig = resolveConfig(tailwindConfig);

</script>

<Header></Header>
<slot />
<Footer></Footer>