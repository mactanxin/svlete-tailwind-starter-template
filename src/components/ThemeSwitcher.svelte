<script>
  import { color } from '../routes/store';
  const themeList = ["indigo", "yellow", "red", "purple", "pink", "blue", "green"];

  const changeTheme = (e) => {
    const { currentTarget } = e;
    const theme = currentTarget.getAttribute('data-theme');
    $color = theme;
    // set theme to store
  }
</script>
<div class="mx-4 my-6">
{#each themeList as theme}
  <button data-theme={theme} class="focus:outline-none theme-button bg-{theme}-500 hover:bg-{theme}-700" on:click|preventDefault={changeTheme}></button>
{/each}
</div>
<style>
.theme-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.theme-button.is-active {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E");  background-size: 10px;
  content: "";
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: center;
}
.theme-button + .theme-button {
  margin-left: 5px;
}
</style>