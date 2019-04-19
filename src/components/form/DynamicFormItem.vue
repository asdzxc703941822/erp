<!-- 动态表单项 -->
<template>
  <el-form-item :label="label" :style="formItemStyle">
    <el-input
      v-if="type===editorTypes.textbox"
      :style="{width:componentWidth}"
      :disabled="IsReadOnly"
    ></el-input>
    <el-input v-else-if="type===editorTypes.open" :style="{width:componentWidth}">
      <el-button slot="append" icon="el-icon-more" @click="open"></el-button>
    </el-input>
    <el-checkbox v-else-if="type===editorTypes.checkbox"></el-checkbox>
    <el-input-number
      v-else-if="type===editorTypes.number"
      controls-position="right"
      :style="{width:componentWidth}"
    ></el-input-number>
    <el-select v-else-if="type===editorTypes.select" :style="{width:componentWidth}" value></el-select>
    <el-DatePicker v-else-if="type===editorTypes.date" :style="{width:componentWidth}"></el-DatePicker>
    <div v-else>默认文本</div>
  </el-form-item>
</template>
<script>
import { mapActions } from "vuex";
//编辑器类型定义
const editorTypes = {
  open: "open",
  textbox: "textbox",
  select: "select",
  checkbox: "checkbox",
  date: "date",
  datetime: "datetime",
  text: "text"
};
export default {
  name: "DynamicFormItem",
  props: {
    label: String,
    type: {
      //表单项类型
      type: String
    },
    width: [Number, String],
    IsRequired: Boolean,
    IsReadOnly: Boolean,
    left: Number,
    top: Number
  },
  data() {
    return {
      editorTypes,
      formItemStyle: { left: null, top: null, position: "relative" }
    };
  },
  computed: {
    componentWidth() {
      return this.width !== undefined ? `${this.width}px` : undefined;
    }
  },
  created() {
    this.formItemStyle.left =
      this.left !== undefined ? `${this.left}px` : undefined;
    this.formItemStyle.top =
      this.top !== undefined ? `${this.top}px` : undefined;
    this.formItemStyle.position =
      this.left || this.top ? "absolute" : "relative";
  },
  methods: {
    ...mapActions("ly/dialog", ["openDialog"]),
    open() {
      this.openDialog({
        title: "弹窗11888881",
        visible: true,
        component: "x2"
      });
    }
  }
};
</script>
<style >
</style>