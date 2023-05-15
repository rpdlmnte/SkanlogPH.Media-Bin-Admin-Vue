<template>
  <el-dialog
    v-model="displayBookingPolicyDialog"
    :title="`${editType} Booking Policy`"
  >
    <el-form
      ref="formData"
      :rules="rules"
      :model="formData"
      label-width="100px"
    >
      <el-form-item label="Name: " prop="name">
        <el-input
          v-model="formData.name"
          autocomplete="off"
          :tabindex="1"
        ></el-input>
      </el-form-item>
      <el-form-item label="Code: " prop="code">
        <el-input
          :tabindex="2"
          v-model="formData.code"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="Warehouse Clients: ">
        <el-select
          v-model="selectedWarehouseClients"
          multiple
          filterable
          placeholder="Select Warehouse Clients"
          style="width: 100%"
          value-key="id"
        >
          <el-option
            v-for="clients in warehouseClients"
            :key="clients.id"
            :label="clients.name"
            :value="{ id: clients.id }"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button
          type="primary"
          @click="newEditBookingPolicy('formData', editType)"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
