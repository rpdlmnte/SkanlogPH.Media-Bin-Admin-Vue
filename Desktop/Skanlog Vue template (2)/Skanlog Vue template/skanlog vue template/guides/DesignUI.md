# UI Design Standards

## Design Consistency and Standardization

- ## Introduction

  - ### Purpose
    Skanlog IT-C follows a UI Design standard across all projects. The purpose of this document is to provide detailed UI design standards to make sure that elements and terminologies are consistent and standardized.

- ## Overview

  - ## Layout

    - ### **Overall Layout**

      There are three (3) basic overall layouts for all projects.

      #### 1. Top to bottom aside menu

      ![Picture](/src/assets/Images/OverallLayout1.PNG)

      ```html
      <template>
        <el-container>
          <SideMenu class="sideMenu" />
          <el-container>
            <el-header>
              <el-menu> </el-menu>
            </el-header>
            <el-main class="main">
              <router-view />
            </el-main>
          </el-container>
        </el-container>
      </template>

      <script>
        import SideMenu from "@/components/skanlog/SideMenu.vue";
      </script>
      ```

      #### 2. Without aside menu

      ![Picture](/src/assets/Images/OverallLayout2.PNG)

      ```html
      <template>
        <el-container>
          <el-container>
            <el-header>
              <el-menu> </el-menu>
            </el-header>
            <el-main class="main">
              <router-view />
            </el-main>
          </el-container>
        </el-container>
      </template>
      ```

      #### 3. Whole top header

      ![Picture](/src/assets/Images/OverallLayout3.PNG)

      ```html
      <template>
        <el-container>
          <el-container>
            <el-header>
              <el-menu> </el-menu>
            </el-header>
            <el-main class="main">
              <router-view />
            </el-main>
          </el-container>
        </el-container>
      </template>

      <script>
        import SideMenu from "@/components/skanlog/SideMenu.vue";
      </script>
      ```

    - ### **Contents Layout**

      This is the basic layout for the content layout. It should have a Page Name in the upper left side of the card and the create button in the upper right side.

      ![Picture](/src/assets/Images/Content.PNG)

      ```html
      <el-card shadow="hover" class="menuCard">
        <el-skeleton :loading="loading" animated :count="1" :throttle="500">
          <template #default>
            <div>
              <div v-if="errorLoading === false">
                <el-row> </el-row>
                <div class="bodyContent"></div>
              </div>
              <el-empty description="Error loading " v-else>
                <el-button>Reload Table</el-button>
              </el-empty>
            </div>
          </template>
        </el-skeleton>
      </el-card>
      ```

  - ## Components

    - ### **Buttons**

      Style for buttons have three types.

      #### 1. **Primary Type**

      ![Picture](/src/assets/Images/primaryButton.PNG)

            - These buttons style is for SAVE, CREATE, OK, NEW, ACCEPT and other action with the intent to change the data.

      ```html
      <template>
        <el-button type="primary">Save</el-button>
      </template>

      <script lang="ts" setup></script>
      ```

      #### 2. **Default Type**

      ![Picture](/src/assets/Images/defaultButton.PNG)

            - These buttons style is for EDIT, CLOSE, OPEN, VIEW, CANCEL and other action with the intent to view the data.

      ```html
      <template>
        <el-button type="default">Edit</el-button>
      </template>

      <script lang="ts" setup></script>
      ```

      #### 3. **Danger Type**

      ![Picture](/src/assets/Images/dangerButton.PNG)

            - These buttons style is for REMOVE AND DELETE action.

      ```html
      <template>
        <el-button type="danger">Delete</el-button>
      </template>

      <script lang="ts" setup></script>
      ```

    - ### **Table**

            - The basic design for tables has sortable header and a search bar at the right side of the table element.

      ![Picture](/src/assets/Images/table.PNG)

            - You can also put a filter result header. This is optional.

      ![Picture](/src/assets/Images/filterTable.PNG)

      ```html
      <el-skeleton :loading="loading" animated :count="1" :throttle="500">
        <template #default>
          <div>
            <div v-if="errorLoading === false">
              <el-row> </el-row>
              <div class="bodyContent">
                <div class="tableContent">
                  <el-scrollbar always>
                    <el-table
                      class="dataTable"
                      :data="filteredGroups"
                      style="width: 100%"
                    >
                      <el-table-column label="Name" prop="name" sortable />
                      <el-table-column label="Email" prop="email" sortable />
                    </el-table>
                  </el-scrollbar>
                </div>
              </div>
            </div>
            <el-empty description="Error loading " v-else>
              <el-button>Reload Table</el-button>
            </el-empty>
          </div>
        </template>
      </el-skeleton>

      <script lang="ts" setup>
          computed: {
          filteredGroups() {
            return this.groups.filter(
              (data) =>
                !this.search ||
                data.name.toLowerCase().includes(this.search.toLowerCase()) ||
                data.email.toLowerCase().includes(this.search.toLowerCase()),
            );
          },
        },
      </script>
      ```

    - ### **Notifications**

            - The basic types for notifications are the following:

      ![Picture](/src/assets/Images/successNotif.PNG)

            1. Sucess - for successfully created, edited or removed messages or notifications.

      ```html
      <template>
        <el-button :plain="true" @click="open2">success</el-button>
      </template>

      <script lang="ts" setup>
        import { ElMessage } from "element-plus";
        const open2 = () => {
          ElMessage({
            showClose: true,
            message: "Congrats, this is a success message.",
            type: "success",
          });
        };
      </script>
      ```

      ![Picture](/src/assets/Images/errorNotif.PNG)

            2. Error - for anything on catch() or error response message.

      ```html
      <template>
        <el-button :plain="true" @click="open4">error</el-button>
      </template>

      <script lang="ts" setup>
        import { ElMessage } from "element-plus";
        const open3 = () => {
          ElMessage({
            showClose: true,
            message: "Warning, this is a warning message.",
            type: "warning",
          });
        };
      </script>
      ```

      ![Picture](/src/assets/Images/messageNotif.PNG)

            3. Message - for fetching data, loading and in filtering data messages or notifications .

      ```html
      <template>
        <el-button :plain="true" @click="open1">message</el-button>
      </template>

      <script lang="ts" setup>
        import { ElMessage } from "element-plus";
        const open1 = () => {
          ElMessage({
            showClose: true,
            message: "This is a message.",
          });
        };
      </script>
      ```

    - ### **Form**

      ![Picture](/src/assets/Images/messageNotif.PNG)

            - The basic design for form consists of input, radio, select, checkbox and so on. Using form, you can collect, verify and submit data. The item in the form are all in right alignment.

      ```html
              <el-form :model="form" label-width="120px">
                  <el-form-item label="Activity name">
                  <el-input v-model="form.name" />
                  </el-form-item>
                  <el-form-item label="Activity zone">
                  <el-select v-model="form.region" placeholder="please select your zone">
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                  </el-select>
                  </el-form-item>
                  <el-form-item label="Activity time">
                  <el-col :span="11">
                      <el-date-picker
                      v-model="form.date1"
                      type="date"
                      placeholder="Pick a date"
                      style="width: 100%"
                      />
                  </el-col>
                  <el-col :span="2" class="text-center">
                      <span class="text-gray-500">-</span>
                  </el-col>
                  <el-col :span="11">
                      <el-time-picker
                      v-model="form.date2"
                      placeholder="Pick a time"
                      style="width: 100%"
                      />
                  </el-col>
                  </el-form-item>
                  <el-form-item label="Instant delivery">
                  <el-switch v-model="form.delivery" />
                  </el-form-item>
                  <el-form-item label="Activity type">
                  <el-checkbox-group v-model="form.type">
                      <el-checkbox label="Online activities" name="type" />
                      <el-checkbox label="Promotion activities" name="type" />
                      <el-checkbox label="Offline activities" name="type" />
                      <el-checkbox label="Simple brand exposure" name="type" />
                  </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="Resources">
                  <el-radio-group v-model="form.resource">
                      <el-radio label="Sponsor" />
                      <el-radio label="Venue" />
                  </el-radio-group>
                  </el-form-item>
                  <el-form-item label="Activity form">
                  <el-input v-model="form.desc" type="textarea" />
                  </el-form-item>
                  <el-form-item>
                  <el-button type="primary" @click="onSubmit">Create</el-button>
                  <el-button>Cancel</el-button>
                  </el-form-item>
              </el-form>

              <script lang="ts" setup>
              import { reactive } from 'vue'

              const onSubmit = () => {
              console.log('submit!')
              }
      ```
