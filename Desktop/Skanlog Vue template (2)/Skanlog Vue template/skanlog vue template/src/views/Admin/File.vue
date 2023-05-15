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
      <!-- Top Level Menu -->

      <!-- Content -->
      <el-skeleton animated :count="1" :throttle="500">
        <template #default>
          <!-- Insert Grid here -->
          <div>
            <!-- Display Control Area -->
            <el-row>
              <!-- Display Controls -->
            </el-row>
            <!-- Display Control Area -->

            <!-- Grid or Table  Add Logic on DIV-->
            <div class="bodyContent">
              <!-- Grid or Table  Empty Data Logic Handler on DIV -->
              <div class="tableContent">
                <el-scrollbar always>
                  <el-table style="width: 100%">
                    <!-- <el-table-column label="First Name" prop="firstName" />
                    <el-table-column label="Last Name" prop="lastName" />
                    <el-table-column label="Email" prop="email" />
                    <el-table-column align="right"> </el-table-column> -->
                  </el-table>
                  <!-- Main Content  -->
                </el-scrollbar>
              </div>
            </div>
          </div>
        </template>
      </el-skeleton>
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

<style>
.my-autocomplete {
  width: 100%;
}

.pac-container {
  z-index: 9999;
  position: absolute;
  width: 100%;
}

.tox .tox-notification--error {
  display: none !important;
}

.tox-tinymce-aux {
  z-index: 5000 !important;
}

.item {
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.menuCard {
  min-height: 50vh;
  max-height: calc(92vh - 32px);
  overflow: hidden;
}

.tableContent {
  max-height: calc(82vh - 32px);
  overflow: auto;
}

.bodyContent {
  padding-top: 0.5rem;
}
.newButton {
  text-align: end;
}
</style>
