<template>
  <div class="home">
    <img
      src="../assets/background_image.png"
      alt="Photo of a bookshelf across a white wall for a minimal aesthetic"
      class="background-image"
    />
    <div class="content">
      <p class="subtitle">WCF EnR©</p>
      <p>
        Unlock your potential! Download academic materials today and pave your
        path to success. Every page is a stepping stone toward your dreams.
        Seize the knowledge, empower your future!
      </p>
      <h1>Download your materials</h1>
      <p class="label">Scroll down</p>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 8.75V31.5M8.75 21L21 33.25L33.25 21"
          stroke="white"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <loadingComponent />
    <onboardingComponent />
  </div>
</template>

<script>
import loadingComponent from "@/components/loadingComponent.vue";
import onboardingComponent from "@/components/onboardingComponent.vue";

export default {
  name: "HomeView",
  components: {
    loadingComponent,
    onboardingComponent,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: #000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(6, 1fr);
    gap: 4.651vw;
    padding: 4.651vw;
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    color: #f0f0f0;
    justify-content: center;
    align-items: flex-end;
    p.subtitle {
      color: #fff;
      /* leading-trim: both;
      text-edge: cap; */
      font-family: "Space Grotesk";
      font-size: 11.163vw;
      font-style: normal;
      font-weight: 400;
      line-height: 101.754%; /* 3.05263rem */
      letter-spacing: -0.558vw;
      max-width: 27.907vw;
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    p {
      color: #fff;
      /* leading-trim: both;
      text-edge: cap; */
      font-family: "IBM Plex Sans";
      font-size: 3.721vw;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.037vw;
      grid-column: 4 / 7;
      grid-row: 3 / 5;
    }
    h1 {
      color: #fff;
      /* leading-trim: both;
      text-edge: cap; */
      font-family: "Space Grotesk";
      font-size: 13.256vw;
      font-style: normal;
      font-weight: 400;
      line-height: 101.754%; /* 3.625rem */
      letter-spacing: -0.663vw;
      grid-column: 1 / 7;
      grid-row-start: 6;
    }
    p.label {
      color: #fff;
      /* leading-trim: both;
      text-edge: cap; */
      font-family: "IBM Plex Sans";
      font-size: 3.721vw;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.037vw;
      grid-column-start: 1;
      grid-row-start: 8;
    }
    svg {
      grid-row: 8 / 9;
      grid-column: 2 / span 4;
      justify-self: center;
      align-self: flex-end;
    }
  }
}
</style>
