<template>
  <div id="app">
    <router-view/>
    <dialogs :dialogs="dialogs"></dialogs>
  </div>
</template>

<script>
import dialogs from "@/components/dialogs";
export default {
  name: "app",
  components: { dialogs },
  data() {
    return {
      dialogs: [{ title: "弹窗111", visible: true, component: "x1" }]
    };
  },
  mounted() {
    setTimeout(() => {
      this.dialogs.push({
        title: "弹窗11888881",
        visible: true,
        component: "x2"
      });
    }, 2000);
    setTimeout(() => {
      this.dialogs.push({
        title: "弹窗1xxxxx1",
        visible: true,
        component: "x1"
      });
    }, 4000);
  }
};
</script>

<style lang="scss">
@import "~@/assets/style/public-class.scss";
</style>
