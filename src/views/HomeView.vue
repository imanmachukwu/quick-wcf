<template>
  <div class="home">
    <img
      src="../assets/background_image.png"
      alt="Photo of a bookshelf across a white wall for a minimal aesthetic"
      class="background-image"
    />
    <div class="content">
      <p class="subtitle">{{ copyright_text }}</p>
      <p>{{ subtext }}</p>
      <h1>{{ title }}</h1>
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
    <loadingComponent v-if="loading" />
    <onboardingComponent v-if="onboarding" />
    <form action="push" class="submit-form">
      <div class="form-content">
        <label for="department" class="form-label">{{
          department_label
        }}</label>
        <select name="department" id="" class="form-select">
          <option value="value0" class="form-options">select department</option>
          <option value="Sociology" class="form-options">Sociology</option>
          <option value="Computer Science" class="form-options">
            Computer Science
          </option>
        </select>
      </div>
      <div class="form-content">
        <label for="level" class="form-label">{{ level_label }}</label>
        <select name="level" id="" class="form-select">
          <option value="value0" class="form-options">select level</option>
          <option value="100" class="form-options">100</option>
          <option value="200" class="form-options">200</option>
          <option value="300" class="form-options">300</option>
          <option value="400" class="form-options">400</option>
        </select>
      </div>
      <input type="submit" class="submit-button" :value="button_text" />
    </form>
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
  data() {
    return {
      loading: false,
      onboarding: true,
      departments: [],
      levels: [],
      title: "",
      subtext: "",
      copyright_text: "",
      department_label: "",
      level_label: "",
      button_text: "",
    };
  },
  methods: {
    saveMessage() {
      localStorage.setItem("message", "onboarded");
      //Showing onboarding for just 4 seconds then removing it
      setTimeout(() => {
        this.onboarding = false;
      }, 4000);
    },
    async getContent() {
      const api = this.$prismic.client;
      //console.log(api);
      // Query the API and assign the response to "response"
      const response = await api.getSingle("homepage");
      try {
        if (response) {
          this.subtext = response.data.subtext[0].text;
          this.title = response.data.title[0].text;
          this.copyright_text = response.data.copyright_text[0].text;
          this.department_label = response.data.department_label[0].text;
          this.level_label = response.data.level_label[0].text;
          this.button_text = response.data.button_text[0].text;
          console.log(response);
          //console.log(works);
        } else {
          console.log("Error fetching content");
        }
      } catch (error) {
        console.error("Error is:", error);
      }
    },
  },
  mounted() {
    const storedMessage = localStorage.getItem("message");
    if (storedMessage) {
      this.onboarding = false; //Skipping onboarding because it has been shown already
    } else {
      this.saveMessage();
    }
  },
  created() {
    this.getContent();
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
  form.submit-form {
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.25rem;
    gap: 2.37rem;
    background: #f0f0f0;
    .form-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      label {
        color: rgba(0, 0, 0, 0.5);
        font-family: "IBM Plex Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 101.754%; /* 1.01756rem */
        letter-spacing: -0.05rem;
      }
      select,
      option {
        color: #000;
        font-family: "IBM Plex Sans";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 101.754%; /* 1.52631rem */
        letter-spacing: -0.075rem;
        border: none;
        background-color: transparent;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
        padding: 1.12rem 0px;
      }
    }
    input.submit-button {
      color: #000;
      font-family: "Space Grotesk";
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 101.754%; /* 2.2895rem */
      letter-spacing: -0.1125rem;
      background-color: transparent;
      border: none;
      margin-top: 5rem;
    }
  }
}
</style>
