<!--  -->
<template>
  <div>
    <LyDialog v-bind="item" v-for="(item, index) in dialogs" :key="index"></LyDialog>
  </div>
</template>
<script>
import LyDialog from "./ly-dialog";
import { mapState } from "vuex";
export default {
  name: "dialogs",
  components: { LyDialog },
  data() {
    return {};
  },
  computed: {
    ...mapState("ly/dialog", ["dialogs"])
  }
};
</script>