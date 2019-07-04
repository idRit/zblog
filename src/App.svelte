<script>
  import { Router, Link, Route } from "svelte-routing";
  import Post from "./components/Post.svelte";
  import Home from "./components/Home.svelte";
  import ErrorPage from "./components/Error.svelte";

  export let name;
  export let baseUrl;
  export let url = "";

  let props = {
    name: name,
    baseUrl: baseUrl
  }

  import { onMount } from "svelte";
</script>

<Router {url}>
  <Route path="/"><Home {...props}/></Route>
  <Route path="*" component={ErrorPage}/>
  <Route path="post/:id" component={Post} />
</Router>

