<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
  </nav> -->
  <router-view />
</template>

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
</style>
