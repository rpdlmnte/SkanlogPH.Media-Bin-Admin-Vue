<template>
  <div>
    <!-- Body Card -->
    <el-card shadow="hover" class="menuCard">
      <!-- Top Level Menu -->
      <el-row class="item">
        <el-col class="titleHeader" :span="5">
          <div
            :style="`font-size: var(--el-font-size-extra-large); text-align: left`"
          >
            <el-icon><Folder /></el-icon>
            <span>Folder</span>
          </div>
        </el-col>
        <el-col :span="5" class="text-right"> </el-col>
      </el-row>
      <div>
        <el-row>
          <!-- Display Controls -->
        </el-row>
        <!-- Display Control Area -->
      </div>
      <div class="bodyContent">
        <!-- Grid or Table  Empty Data Logic Handler on DIV -->
        <div class="tableContent">
          <el-scrollbar always>
            <el-table style="width: 100%"> </el-table>
            <!-- Main Content  -->
          </el-scrollbar>
        </div>
      </div>

      <!-- Content -->
    </el-card>

    <!-- Dialog -->
    <!-- Grant User Dialog -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Folder } from "@element-plus/icons";

export default defineComponent({
  name: "File",
  components: {
    Folder,
  },
});
</script>
