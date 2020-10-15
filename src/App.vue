<template>
  <div id="app" class="greyBackground">
    <Header />
    <div class="wrapper bodyOverlay">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./Variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
.wrapper {
  max-width: 1140px;
  margin: 0 auto;
}
.greyBackground {
  background-color: $bodyBGColor;
  padding-bottom: 40px;
}
.bodyOverlay {
  @extend %smallScreenPadding;
}
</style>
