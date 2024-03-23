<template>
  <div class="home">
    <loadingComponent v-if="loading" />
    <div class="content">
      <div class="loaded-materials">
        <div class="material">
          <p class="title">GSP 101 CA</p>
          <p class="size">33kb</p>
          <p class="length">10 pages</p>
          <a href="" class="save-button" download>Save</a>
        </div>
        <div class="material">
          <p class="title">GSP 101 CA</p>
          <p class="size">33kb</p>
          <p class="length">10 pages</p>
          <a href="" class="save-button" download>Save</a>
        </div>
      </div>
      <div v-if="error" class="error-container">
        <p class="text">Heck.</p>
        <p class="text">We couldn’t find any material for you yet.</p>
        <p class="text">Materials are still being added to the platform.</p>
        <p class="text">
          If you have any, please send it to +23412345678 on WhatsApp
          <svg
            width="66"
            height="16"
            viewBox="0 0 66 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.7071 8.7071C66.0976 8.31658 66.0976 7.68341 65.7071 7.29289L59.3431 0.928927C58.9526 0.538403 58.3195 0.538403 57.9289 0.928927C57.5384 1.31945 57.5384 1.95262 57.9289 2.34314L63.5858 7.99999L57.9289 13.6568C57.5384 14.0474 57.5384 14.6805 57.9289 15.0711C58.3195 15.4616 58.9526 15.4616 59.3431 15.0711L65.7071 8.7071ZM8.74228e-08 9L65 8.99999L65 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
              fill="black"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import loadingComponent from "@/components/loadingComponent.vue";

export default {
  name: "MaterialsPage",
  components: {
    loadingComponent,
  },
  data() {
    return {
      error: false,
      loading: false,
      materialsGotten: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100dvw;
  height: 100dvh;
  .content {
    width: 100%;
    height: 100%;
    .loaded-materials {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 1.25rem;
      .material {
        border-radius: 1.5625rem;
        background: #fff;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr auto;
        grid-auto-rows: fit-content;
        padding: 1.25rem;
        gap: 1.25rem;
        p.title {
          grid-row: 1 / 2;
          grid-column: 1 / 4;
          color: #000;
          font-family: "Space Grotesk";
          font-size: 3rem;
          font-style: normal;
          font-weight: 400;
          line-height: 101.754%; /* 3.05263rem */
          letter-spacing: -0.15rem;
          //text-align: center;
          //border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
        }
        svg {
          position: absolute;
          top: 6rem;
        }
        p.size {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          color: rgba(0, 0, 0, 0.5);
          text-align: center;
          font-family: "IBM Plex Sans";
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: 101.754%; /* 1.52631rem */
          letter-spacing: -0.075rem;
          height: fit-content;
        }
        p.length {
          height: fit-content;
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          color: rgba(0, 0, 0, 0.5);
          text-align: center;
          font-family: "IBM Plex Sans";
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: 101.754%; /* 1.52631rem */
          letter-spacing: -0.075rem;
        }
        a.save-button {
          height: fit-content;
          grid-column: 3 / 4;
          grid-row: 2 / 3;
          color: #000;
          text-align: center;
          font-family: "IBM Plex Sans";
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: 101.754%; /* 1.52631rem */
          letter-spacing: -0.075rem;
        }
      }
    }
    .error-container {
      width: 100dvw;
      height: 100dvh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 7;
      background: #f0f0f0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow-y: hidden;
      gap: 2.03rem;
      .text {
        max-width: 20.5rem;
        color: #000;
        font-family: "IBM Plex Sans";
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 101.754%; /* 2.03506rem */
        letter-spacing: -0.1rem;
        text-align: center;
        svg {
          margin-left: 3rem;
        }
      }
    }
  }
}
</style>
