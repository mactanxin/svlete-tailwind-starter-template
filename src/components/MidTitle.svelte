<script>
	import { color } from './../routes/store';
  export let title;
  export let desc;
</script>

<div class="flex flex-col text-center w-full mt-10">
  <h2 class="text-xs text-{$color}-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">{ title }</h1>
  <p class="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">{desc}</p>
</div>