<!-- 业务网格 -->
<template>
  <div>
    <div>
      <el-button @click="clearSelection" size="mini">取消选择</el-button>
    </div>
    <el-table
      ref="table"
      :data="data"
      v-bind="options"
      @current-change="onCurrentChange"
      @selection-change="onSelectionChange"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column type="selection"></el-table-column>
      <repeatColumns :columns="localColumns"></repeatColumns>
    </el-table>
  </div>
</template>
<script>
import repeatColumns from "./RepeatColumns";
export default {
  name: "LyTable",
  components: { repeatColumns },
  props: {
    singleSelect: { type: Boolean, default: true },
    columns: Array,
    data: Array
  },
  data() {
    return {
      options: {
        border: true,
        stripe: true,
        size: "mini",
        height: 500,
        highlightCurrentRow: this.singleSelect,
        showSummary: true,
        sumText: "合并行信息"
      },

      multipleSelection: [], //多选选中的行
      selection: null //单选选中的行
    };
  },
  computed: {
    localColumns() {
      //[{key:"",title:"", children: [] }, {}];
      return this.handleColumns(this.columns);
    }
  },
  methods: {
    clearSelection() {
      this.$refs.table.clearSelection();
      this.selection = null;
    },
    handleColumns(columns) {
      function h(column) {
        let { headerAlign, key: prop, title: label, ...other } = column;

        return {
          // 默认标题居中
          headerAlign: headerAlign || "center",
          prop,
          label,

          ...other
        };
      }
      return columns.map(col => {
        if (!_.isPlainObject(col))
          throw new Error("el-table列配置需要是一个纯对象");
        col = h(col);
        if (_.isArray(col.children))
          col.children = this.handleColumns(col.children);
        return col;
      });
    },
    onCurrentChange(currentRow, oldCurrentRow) {
      this.selection = currentRow;
    },
    onSelectionChange(rows) {
      this.multipleSelection = rows;
    }
  }
};
</script>
 