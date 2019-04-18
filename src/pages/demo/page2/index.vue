<template>
  <d2-container :filename="filename">
    <LyTable></LyTable>
  </d2-container>
</template>

<script>
import LyTable from "@/components/table/ly-table";
export default {
  name: "page2",
  components: { LyTable },
  data() {
    return {
      filename: __filename
    };
  }
};
</script>
