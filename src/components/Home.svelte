<script>
  import { Router, Link, Route } from "svelte-routing";

  export let name;
  export let baseUrl;
  export let url;

  import { onMount } from "svelte";

  import Card from "./Card.svelte";

  let aboutMe = "";
  let aboutMePromise = getAboutMe();

  async function getAboutMe() {
    const res = await fetch(baseUrl + "api/getBlogByTitle/aboutMe");
    let respo = await res.json();
    console.log(respo.content);
    return respo.content;
  }

  function open() {}

  let allPosts = [];
  onMount(async () => {
    const res = await fetch(baseUrl + "api/getAllBlogs");
    allPosts = await res.json();
    allPosts.pop();
  });
</script>

<style>
  .bgimg1,
  .bgimg2 {
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bgimg1 {
    background-image: url("https://drive.google.com/uc?export=download&id=1iny3jfjv5lBapozv3Jx614HkQTBUtIpZ");
    min-height: 100%;
  }

  .bgimg2 {
    background-image: url("https://scontent-lga3-1.cdninstagram.com/vp/7a2e4ad2db9f83ffa243edf413692bc5/5DC28F92/t51.2885-15/e35/41339795_471036513381082_6857434592559759360_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com");
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

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .footerarea {
    display: flex;
    text-align: center;
    display: block;
    font-size: 16px;
    letter-spacing: 5px;
  }

  .footeritem {
    padding: 20px;
    box-sizing: border-box;
    margin-right: 5%;
    margin-top: 5%;
    font-size: 16px;
    letter-spacing: 5px;
  }

  .zlogo {
    margin: auto;
  }

  @media only screen and (max-width: 480px) {
    .bgimg1 {
      background-image: url("https://drive.google.com/uc?export=download&id=1_JJZeI8seclFvmZKRodUi9PKflnfMXGM");
    }
  }
</style>

<div class="bgimg1">
  <div class="caption">
    <img
      class="zlogo"
      width="75%"
      height="75%"
      src="https://drive.google.com/uc?export=download&id=1OQD-t5-CHCmGp1IqqVAAfVGLoIG1eouo"
      alt="" />
    <!-- <span class="border"> {name} </span> -->
  </div>
</div>

<div
  style="color: white;background-color:black;text-align:center;padding:50px
  80px;text-align: justify;">
  <h3 style="text-align:center;font-size:24px; letter-spacing: 10px;">About Me</h3>
  {#await aboutMePromise}
    <p>...waiting</p>
  {:then aboutMe}
    <div style="font-size:18px; letter-spacing: 2px;">
    {@html aboutMe}
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<div class="bgimg2">
  <h3 style="text-align:center; padding:50px 80px; color: white;">
    Recent Reads
  </h3>
  <div class="cards-container">
    {#if allPosts.length === 0}
      <div class="caption">
        <span class="border">Comeback soon for posts!</span>
      </div>
    {:else}
      {#each allPosts as post}
        <Card coverPhoto={post.coverPhoto} title={post.title} content={post.content} id={post._id} />
      {/each}
    {/if}
  </div>
</div>

<footer
  style="color: white;background-color:black;text-align:center;padding:10px
  10px;text-align: justify;">
  <h3 style="text-align:center;">Contact Me</h3>
  <div class="footerarea">
    <a class="footeritem" href="mailto:zeddshaikh@gmail.com">
      zeddshaikh@gmail.com
    </a>
    <a class="footeritem" href="https://www.instagram.com/zeddshaikh/">
      instagram
    </a>
    <a class="footeritem" href="https://www.twitter.com/zeddshaikh/">twitter</a>
    <a class="footeritem" href="https://www.reddit.com/user/zeddshaikh">
      reddit
    </a>
  </div>
</footer>
