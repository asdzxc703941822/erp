<template>
  <d2-container :filename="filename">
    <el-dialog title="外层 Dialog" :visible.sync="v1" append-to-body>
      <el-dialog title="内层 Dialog" :visible.sync="v2" append-to-body></el-dialog>
      <button @click="v2=!v2">打开弹窗</button>
    </el-dialog>
  </d2-container>
</template>

<script>
export default {
  name: "page3",
  data() {
    return {
      filename: __filename,
      v1: true,
      v2: true
    };
  }
};
</script>
