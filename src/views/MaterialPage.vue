<template data-barba="wrapper">
  <div class="home" data-barba="container" data-barba-namespace="materials">
    <loadingComponent v-if="loading" />
    <div class="content">
      <div class="loaded-materials">
        <svg
          @click="onBackButtonClick"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.25 21L10.5 21M21 8.75L8.75 21L21 33.25"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          class="material"
          v-for="(material, index) in materials"
          :key="index"
        >
          <p class="title">{{ material.data.name[0].text }}</p>
          <p class="size">{{ material.data.download_size[0].text }}</p>
          <!-- <p class="length">{{ material.data.pages_length[0].text }}</p> -->
          <a :href="material.data.material.url" class="save-button" download
            >Save</a
          >
        </div>
      </div>
      <div v-if="error" class="error-container">
        <p class="text">Heck.</p>
        <p class="text">We couldn’t find any material for you yet.</p>
        <p class="text">Materials are still being added to the platform.</p>
        <p class="text">
          If you have any, please send it to Ma Lola on WhatsApp.
        </p>
        <svg
          @click="onBackButtonClick"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.25 21L10.5 21M21 8.75L8.75 21L21 33.25"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
      loading: true,
      materialsGotten: false,
      materials: [],
      query_details: [],
    };
  },
  methods: {
    async getContent() {
      const api = this.$prismic.client;
      //console.log(api);
      // Query the API and assign the response to "response"
      this.query_details = localStorage
        .getItem("query_details")
        .split(",")
        .map((item) => item.trim());
      if (this.query_details && this.query_details.length >= 0) {
        //console.log("oh happy day!");
        //console.log(this.query_details);

        const response = await api.getAllByEveryTag(this.query_details);
        //console.log(response);
        this.loading = true;
        try {
          if (response.length > 0) {
            this.loading = false;
            this.materialsGotten = true;
            this.materials = response.sort();
            //console.log(response);
            //console.log(works);
          } else {
            this.error = true;
            console.log("Error fetching content");
          }
        } catch (error) {
          this.error = true;
          this.loading = false;
          console.error("Error is:", error);
        }
      } else {
        this.$router.push("/");
      }
    },
    onBackButtonClick() {
      this.$router.go(-1);
      //this.$router.push({ name: "home", hash: "#details-form" });
    },
  },
  mounted() {
    this.getContent();
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
