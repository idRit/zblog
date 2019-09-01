<script>
  export let name;
  export let baseUrl;
  export let url;

  import ErrorPage from "./Error.svelte";
  import Cover from "./Cover.svelte";

  let props = {
    title: "",
    image: ""
  };

  let id = "";

  let blogDataPromise = getBlogData();
  async function getBlogData() {
    id = window.location.href;
    id = id.split("post/")[1];
    //console.log(id);
    let res = await fetch(baseUrl + "api/getBlogById/" + id);
    let blog = await res.json();
    props.image = blog.coverPhoto;
    props.title = blog.title;
    return blog;
  }
</script>

<style>
  .cont {
    padding: 50px 80px;
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
    margin-top: 7%;
    font-size: 16px;
    letter-spacing: 5px;
  }
  @media only screen and (max-width: 600px) {
    .cont {
      padding: 50px 10px;
    }
  }
</style>

{#await blogDataPromise}
  <p>... loading</p>
{:then blogData}
  {#if typeof blogData.title === 'undefined'}
    <ErrorPage />
  {:else}
    <Cover {...props} />

    <div
      style="color: white;background-color:black;"
      class="cont"
      >
      {@html `<style>
        @media only screen and (max-width: 480px) {
          img { 
            width: 80%; 
            height: 80%; 
          }
        }
      </style>` + blogData.content}
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
        <a class="footeritem" href="https://www.twitter.com/zeddshaikh/">
          twitter
        </a>
        <a class="footeritem" href="https://www.reddit.com/user/zeddshaikh">
          reddit
        </a>
      </div>
    </footer>
  {/if}
{:catch error}
  <ErrorPage />
{/await}
