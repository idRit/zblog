<script>
  export let name;
  export let baseUrl;
  export let url;

  import { Router, Link, Route } from "svelte-routing";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";

  let id = "";

  let blogDataPromise = getBlogData();
  
  async function getBlogData() {
    id = window.location.href;
    id = id.split("post/")[1];
    console.log(id);
    let res = await fetch(baseUrl + "api/getBlogById/" + id);
    let blog = await res.json();
    return blog;
  }
</script>

<style>

</style>

{#await blogDataPromise}
  <p>... loading</p>
{:then blogData}
  {#if typeof blogData === 'undefined'}
    <p>not found</p>
  {:else}
    <p> {blogData.title} </p>
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
