<template>
  <router-view id="main-view" v-if="isMobile" />
  <main v-if="isDesktop">
    <p>Please use your phone to visit this site.</p>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMobile: false,
      isDesktop: true,
    };
  },
  methods: {
    checkDevice() {
      if (window.innerWidth <= 675) {
        this.isMobile = true;
        this.isDesktop = false;
      }
    },
  },
  mounted() {
    this.checkDevice();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Space+Grotesk:wght@300..700&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  background: #f0f0f0;
  overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

p {
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
}

a {
  text-decoration: none;
}

#main-view {
  display: none;
}

main {
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  p {
    color: #000;
    font-family: "IBM Plex Sans";
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 101.754%;
    letter-spacing: -0.1125rem;
  }
}

@media only screen and (max-width: 678px) {
  #main-view {
    display: block;
  }
  main {
    display: none;
  }
}
</style>
