<!--  -->
<template>
  <el-dialog :title="title" :visible.sync="localVisible" append-to-body>
    <component :is="componentId"></component>
  </el-dialog>
</template>
<script>
import x1 from "./x1";
import x2 from "./x2";
export default {
  name: "ly-dialog",
  props: {
    title: String,
    visible: Boolean,
    componentId: String
  },
  components: {
    x1,
    x2
  },
  data() {
    return {
      localVisible: this.visible
    };
  },
  created() {
    console.log(this.title);
  }
};
</script>