<template>
  <el-table class="dataTable" :data="locations" style="width: 100%">
    <el-table-column prop="id" label="Location ID" width="200" />
    <el-table-column prop="locationName" label="Name" />

    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small"> Edit </el-button>
        <el-button size="small" type="danger"> Delete </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
