<!--  -->
<template>
  <div>
    <LyDialog
      :title="item.title"
      :visible="item.visible"
      :componentId="item.component"
      v-for="(item, index) in dialogs"
      :key="index"
    ></LyDialog>
  </div>
</template>
<script>
import LyDialog from "./ly-dialog";
export default {
  name: "dialogs",
  props: { dialogs: Array },
  components: { LyDialog },
  data() {
    return {};
  }
};
</script>