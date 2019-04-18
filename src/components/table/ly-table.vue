<!-- 业务网格 -->
<template>
  <div>
    <div>
      <el-button @click="clearSelection">取消选择</el-button>
    </div>
    <el-table
      ref="table"
      :data="tableData"
      v-bind="options"
      style="width: 100%"
      @current-change="onCurrentChange"
      @selection-change="onSelectionChange"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址" header-align="center"></el-table-column>
      <el-table-column v-for="(item, index) in localColumn" :key="index"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "LyTable",
  props: {
    singleSelect: { type: Boolean, default: true },
    columns: Array
  },
  data() {
    return {
      options: {
        border: true,
        stripe: true,
        size: "mini",
        height: 500,
        highlightCurrentRow: this.singleSelect
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      multipleSelection: [], //多选选中的行
      selection: null //单选选中的行
    };
  },
  computed: {
    localColumn() {
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
      function h(col) {
        let { headerAlign } = column;
        // 默认标题居中
        column.headerAlign = headerAlign || "center";
        return column;
      }
      return columns.map(col => {
        if (!_.isPlainObject(col))
          throw new Error("el-table列配置需要是一个纯对象");
        col = h(col);
        if (_.isArray(col.children)) col.children = handleColumns(col.children);
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
 