<!--  -->
<template>
  <div class="billForm">
    <el-form size="mini" inline>
      <DynamicFormItem v-for="(item, index) in items" :key="index" v-bind="item"></DynamicFormItem>
    </el-form>
  </div>
</template>
<script>
import DynamicFormItem from "./DynamicFormItem";
export default {
  name: "LyForm",
  components: {
    DynamicFormItem
  },
  data() {
    return {
      items: [
        { label: "姓名", width: 200, type: "textbox", IsReadOnly: true },
        { label: "打开弹窗", width: 150, type: "open" },
        { label: "是否更新", width: 100, type: "checkbox" },
        { label: "数字", width: 200, type: "number" },
        { label: "下拉框", width: 120, type: "select" },
        { label: "日期", width: 100, type: "date" },
        { label: "地址", width: 20, type: "xx", left: 500, top: 300 }
      ]
    };
  }
};
</script>
<style >
.billForm {
  position: relative;
}
</style>