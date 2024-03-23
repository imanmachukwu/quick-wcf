<template>
  <div class="text_container">
    <p class="text"><span>WCF EnR©</span> has been cooking...</p>
  </div>
</template>

<script>
export default {
  name: "onboardingComponent",
};
</script>

<style lang="scss" scoped>
.text_container {
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
  .text {
    max-width: 20.5rem;
    color: #000;
    font-family: "IBM Plex Sans";
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 101.754%;
    letter-spacing: -0.1125rem;
    span {
      color: #000;
      font-family: "Space Grotesk";
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 101.754%; /* 2.2895rem */
      letter-spacing: -0.1125rem;
    }
  }
}
</style>
