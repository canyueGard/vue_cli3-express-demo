<template>
    <div class="home">
        <div class="image"></div>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" type="text/scss">
.image{
    width: 200px;
    height: 200px;
    background: url("../assets/logo.png");
    margin: 0 auto;
}

</style>
