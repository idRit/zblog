<script>
  export let coverPhoto;
  export let title;
  export let content;
  export let id;

  import { navigate } from "svelte-routing";

  function open() {
    navigate("/post/" + id, {});
  }
</script>

<style>
  .card {
    width: 200px;
    margin: 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    color: aliceblue;
  }
  .card img {
    max-width: 100%;
  }
  .card .text {
    padding: 0 20px 20px;
  }
  .card .text > button {
    background: gray;
    border: 0;
    color: white;
    padding: 10px;
    width: 100%;
  }
  .card:nth-child(1) {
    width: 420px;
  }
  .long-and-truncated {
    flex: 1;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media only screen and (max-width: 600px) {
    .card {
      max-width: 90%;
    }
  }
</style>

<article class="card">
  <img src={coverPhoto} alt="Sample photo" />
  <div class="text">
    <h3>{title}</h3>
    <p class="long-and-truncated" style="font-size:16px; letter-spacing: 5px;">
      {@html content.replace(/<[^>]*>/g, '')}
    </p>
    <button on:click={open}>Read more</button>
  </div>
</article>
