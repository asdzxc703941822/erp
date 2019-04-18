  <!-- 递归生成el-table-column   -->
<script>
export default {
  functional: true,
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  render(h, { props }) {
    return props.columns.map((col, index) => {
      return h(
        "el-table-column",
        {
          props: { ...col },
          key: index,
          scopedSlots: {
            default: props => h("el-input", "xx")
          }
        },
        h("repeatColumns", {
          props: {
            columns: col.children
          }
        })
      );
    });
  }
};
</script>