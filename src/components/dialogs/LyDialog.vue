<!--  -->
<template>
  <el-dialog :title="title" :visible.sync="localVisible" append-to-body @close="closeDialog">
    <component :is="componentId" v-bind="params"></component>
  </el-dialog>
</template>
<script>
import x1 from "./x1";
import x2 from "./x2";
import { mapActions } from "vuex";
export default {
  name: "LyDialog",
  props: {
    title: String,
    componentId: String,
    params: Object
  },
  components: {
    x1,
    x2
  },
  data() {
    return {
      localVisible: true
    };
  },
  created() {
    console.log(this.title);
  },
  methods: {
    ...mapActions("ly/dialog", ["closeDialog"])
  }
};
</script>