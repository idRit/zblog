<script>
  export let image;
  export let title;

  import { onMount } from "svelte";
  onMount(() => {
    document.getElementById("back").style.backgroundImage = "url("+image+")";
  });
</script>

<style>
  .bgimg1 {
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bgimg1 {
    background-image: src(image);
    min-height: 100%;
  }

  .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    display: flex;
  }

  .caption span.border {
    background-color: #111;
    color: #fff;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 10px;
    margin: auto;
  }
</style>

<div class="bgimg1" id="back">
  <div class="caption">
    <span class="border"> {title} </span>
  </div>
</div>
