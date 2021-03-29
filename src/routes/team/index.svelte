<script>
	import BlogList from '../../components/BlogList.svelte';
  let articles = [
    {
      category: 'JS',
      createdAt: '2021-03-22',
      title: 'How to TailwindCSS with Svelte',
      content: ''
    },
    {
      category: 'Svelte',
      createdAt: '2021-03-23',
      title: 'How to TailwindCSS with NodeJS',
      content: ''
    }]
</script>

<BlogList articles={articles}/>
