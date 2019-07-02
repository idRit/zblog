<script>
  export let name;
  export let baseUrl;

  let aboutMe = "";
  let aboutMePromise = getAboutMe();

  async function getAboutMe() {
    const res = await fetch(baseUrl + "api/getBlogByTitle/aboutMe");
    let respo = await res.json();
    console.log(respo.content);
    return respo.content;
  }
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
    background-image: url("https://drive.google.com/uc?export=download&id=1iny3jfjv5lBapozv3Jx614HkQTBUtIpZ");
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
  }

  .zlogo {
    margin: auto;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 40%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px;
  }
  /* Turn off parallax scrolling for tablets and phones */
  @media only screen and (max-width: 480px) {
    .bgimg1 {
      background-image: url("https://drive.google.com/uc?export=download&id=1_JJZeI8seclFvmZKRodUi9PKflnfMXGM");
      background-attachment: scroll;
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
  style="color: #777;background-color:white;text-align:center;padding:50px
  80px;text-align: justify;">
  <h3 style="text-align:center;">About Me</h3>
  {#await aboutMePromise}
    <p>...waiting</p>
  {:then aboutMe}
    <p>
      {@html aboutMe}
    </p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<!-- <div class="bgimg1">
  <div class="w3-card-4" style="width:50%; background-color: white">
    <img src="https://scontent-lga3-1.cdninstagram.com/vp/1387ec8e0ebbd2a40b965fbe05e88f2d/5DB0432E/t51.2885-15/e35/51762062_358777364977782_4229431296205314296_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="Alps" style="width:100%">
    <div class="w3-container w3-center">
      <p>The Italian / Austrian Alps</p>
    </div>
  </div>
</div> -->

<!-- <img
      class="border"
      src="https://drive.google.com/uc?export=download&id=1CkLhBhPN7uJ97bsSl4TZDxXxREIMq0cO"
      width="50%"
      height="50%"
      alt="" /> -->
