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
            <span>Users</span>
          </div>
        </el-col>
        <el-col :span="5" class="text-right"> </el-col>
      </el-row>
      <div>
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
                <el-table-column label="First Name" prop="firstName" />
                <el-table-column label="Last Name" prop="lastName" />
                <el-table-column label="Email" prop="email" />
                <el-table-column align="right"> </el-table-column>
              </el-table>
              <!-- Main Content  -->
            </el-scrollbar>
          </div>
        </div>
      </div>

      <!-- Content -->
    </el-card>

    <!-- Dialog -->
    <!-- Grant User Dialog -->
  </div>
</template>
