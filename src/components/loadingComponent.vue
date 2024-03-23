<template>
  <div class="loading">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: "loadingComponent",
};
</script>

<style lang="scss" scoped>
.loading {
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
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #000;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
