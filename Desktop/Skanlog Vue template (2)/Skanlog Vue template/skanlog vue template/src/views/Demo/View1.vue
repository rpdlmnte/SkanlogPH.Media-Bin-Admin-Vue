<template>
	<div>
		<!-- Body Card -->
		<el-card shadow="hover" class="menuCard">
			<!-- Top Level Menu -->
			<el-row class="item">
				<el-col class="titleHeader" :span="3">
					<div :style="`font-size: var(--el-font-size-extra-large)`">
						Last Mile Plan
					</div>
				</el-col>
				<el-col :span="5" class="text-right">
					<div class="newButton">
						<el-button type="primary" @click="showScheduleTemplateDialog()">
							Schedule from Plan Template
						</el-button>
					</div>
				</el-col>
			</el-row>
			<!-- Top Level Menu -->

			<!-- Content -->
			<div class="tripDatePicker">
				<div>
					<label>Select Dates : </label>
				</div>
				<div>
					<v-date-picker
						:firstDayOfWeek="2"
						v-model="tripDates"
						is-range
						:input-debounce="500"
						is24hr
						:masks="dateMask"
					>
						<template v-slot="{ inputValue, inputEvents }">
							<div>
								<el-col>
									<el-input
										:value="inputValue.start"
										v-on="inputEvents.start"
										type="datetime"
										placeholder="Start Date"
									>
									</el-input>
								</el-col>

								<el-col> - </el-col>

								<el-col>
									<el-input
										:value="inputValue.end"
										v-on="inputEvents.end"
										type="datetime"
										placeholder="End Date"
									>
									</el-input>
								</el-col>
							</div>
						</template>
					</v-date-picker>
				</div>
				<div>
					<el-button
						class="pickerElement"
						type="primary"
						size="small"
						@click="getPlanSummary()"
					>
						Apply Selection
					</el-button>
				</div>
				<div>
					<el-switch
						v-model="displayBookedCapacity"
						active-text="Display Capacity"
					/>
				</div>
			</div>

			<el-skeleton :loading="loading" animated :count="1" :throttle="500">
				<template #default>
					<div class="bodyContent">
						<!-- Insert Grid here -->
						<div v-if="!errorLoading">
							<!-- Table -->
							<div class="tableContent">
								<el-scrollbar always v-if="planSummary !== null">
									<table>
										<!-- Header Capacity -->
										<tr>
											<th :colspan="parseInt(displayDates.length + 1)">
												Day Capacity
											</th>
										</tr>
										<!-- Header Capacity -->

										<!-- Dates -->
										<tr>
											<th>Dates</th>
											<template v-for="day in displayDates" :key="day">
												<td id="date">{{ returnDateString(day) }}</td>
											</template>
										</tr>
										<!-- Dates -->

										<!-- Areas -->
										<template v-for="area in areas" :key="area.areaName">
											<!-- Area Capacity -->
											<tr>
												<th>Area: {{ area.areaName }}</th>
												<template v-for="day in displayDates" :key="day">
													<td
														id="stops"
														@click="areaClick(area.areaDays, day)"
													></td>
													<td
														id="stops"
														@click="areaClick(area.areaDays, day)"
														v-bind:class="{
															none:
																getCapacityStatus(area.areaDays, day) ===
																'None',
															low:
																getCapacityStatus(area.areaDays, day) === 'Low',
															medium:
																getCapacityStatus(area.areaDays, day) ===
																'Medium',
															high:
																getCapacityStatus(area.areaDays, day) ===
																'High',
															overbooked:
																getCapacityStatus(area.areaDays, day) ===
																'Overbooked',
														}"
													>
														<template v-if="displayBookedCapacity">
															{{ getCapacityWithBooking(area.areaDays, day) }}
														</template>
														{{ getCapacity(area.areaDays, day) }}
													</td>
												</template>
											</tr>
											<!-- Area Capacity -->

											<!-- Zones -->
											<template v-for="zone in area.zones" :key="zone.zoneName">
												<!-- Zone Name -->
												<tr>
													<td :colspan="parseInt(displayDates.length + 1)">
														Zone: {{ zone.zoneName }}
													</td>
												</tr>
												<!-- Zone Name -->

												<!-- Zone Time Windowds -->
												<template
													v-for="timeGroup in zone.timeWindowGroups"
													:key="timeGroup.displayGroupingKey"
												>
													<!-- Main Time Window -->
													<tr class="mainWindow">
														<td id="time">
															{{ getTimeWindow(timeGroup.timeWindows) }}
														</td>
														<template v-for="day in displayDates" :key="day">
															<td
																id="stops"
																@click="timeWindowClick(timeGroup, zone, day)"
																v-bind:class="{
																	none:
																		getCapacityStatus(timeGroup.days, day) ===
																		'None',
																	low:
																		getCapacityStatus(timeGroup.days, day) ===
																		'Low',
																	medium:
																		getCapacityStatus(timeGroup.days, day) ===
																		'Medium',
																	high:
																		getCapacityStatus(timeGroup.days, day) ===
																		'High',
																	overbooked:
																		getCapacityStatus(timeGroup.days, day) ===
																		'Overbooked',
																}"
															>
																<template v-if="displayBookedCapacity">
																	{{
																		getCapacityWithBooking(timeGroup.days, day)
																	}}
																</template>
																{{ getCapacity(timeGroup.days, day) }}
															</td>
														</template>
													</tr>
													<!-- Main Time Window -->

													<!-- Sub Group Time Windows -->
													<template
														v-for="subGroup in timeGroup.subGroups"
														:key="subGroup.displayGroupingKey"
													>
														<tr class="subWindow">
															<td id="time">
																<pre>
                                {{ getTimeWindow(subGroup.timeWindows) }}
                            </pre
																>
															</td>
															<template v-for="day in displayDates" :key="day">
																<td
																	id="stops"
																	@click="timeWindowClick(subGroup, zone, day)"
																	v-bind:class="{
																		none:
																			getCapacityStatus(subGroup.days, day) ===
																			'None',
																		low:
																			getCapacityStatus(subGroup.days, day) ===
																			'Low',
																		medium:
																			getCapacityStatus(subGroup.days, day) ===
																			'Medium',
																		high:
																			getCapacityStatus(subGroup.days, day) ===
																			'High',
																		overbooked:
																			getCapacityStatus(subGroup.days, day) ===
																			'Overbooked',
																	}"
																>
																	<template v-if="displayBookedCapacity">
																		{{
																			getCapacityWithBooking(subGroup.days, day)
																		}}
																	</template>
																	{{ getCapacity(subGroup.days, day) }}
																</td>
															</template>
														</tr>
													</template>
													<!-- Sub Group Time Windows -->
												</template>
												<!-- Zone Time Windowds -->
											</template>
											<!-- Zones -->
										</template>
										<!-- Areas -->
									</table>
								</el-scrollbar>
								<el-empty
									description="Please select dates to view plans."
									v-else
								>
								</el-empty>
							</div>

							<!-- Table -->
						</div>
						<!-- V-else this  Error Pic-->
						<el-empty description="Error loading" v-else>
							<el-button @click="getPlanSummary()">Reload Table</el-button>
						</el-empty>
					</div>
				</template>
			</el-skeleton>
			<!-- Content -->
		</el-card>

		<!-- Schedule From Plan Dialog -->
		<el-dialog
			v-model="displayScheduleTemplateDialog"
			:title="`Schedule from Last Mile Plan Template`"
		>
			<el-form
				ref="scheduleTemplateForm"
				:model="scheduleTemplateForm"
				label-width="130px"
			>
				<el-form-item
					label="Plan Template: "
					:rules="[
						{
							required: true,
							message: 'Last Mile Plan Template is required',
							trigger: 'blur',
						},
					]"
				>
					<el-select
						v-model="scheduleTemplateForm.lastMileTemplatePlanId"
						filterable
						placeholder="Select Plan Template"
						style="width: 100%"
						value-key="id"
					>
						<el-option
							v-for="plan in planTemplates"
							:key="plan.id"
							:label="plan.name"
							:value="plan.id"
							:disabled="plan.disabled"
						>
						</el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="Date Range: ">
					<v-date-picker
						:firstDayOfWeek="2"
						v-model="templateDates"
						is-range
						:input-debounce="500"
						mode="dateTime"
						is24hr
						:masks="dateMask"
					>
						<template v-slot="{ inputValue, inputEvents }">
							<div>
								<el-col>
									<el-input
										:value="inputValue.start"
										v-on="inputEvents.start"
										placeholder="Start Date"
									>
									</el-input>
								</el-col>

								<el-col> - </el-col>

								<el-col>
									<el-input
										:value="inputValue.end"
										v-on="inputEvents.end"
										type="datetime"
										placeholder="End Date"
									>
									</el-input>
								</el-col>
							</div>
						</template>
					</v-date-picker>
				</el-form-item>

				<el-form-item label="Week Offset: ">
					<el-col :span="7">
						<el-input
							:min="0"
							autocomplete="off"
							type="number"
							v-model="scheduleTemplateForm.weekOffset"
							style="width: 100%"
						></el-input>
					</el-col>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancelScheduleTemplateDialog()">Cancel</el-button>
					<el-button
						type="primary"
						@click="schedulePlanFromTemplate('scheduleTemplateForm')"
					>
						Confirm
					</el-button>
				</span>
			</template>
		</el-dialog>
		<!-- Schedule Form Plan Dialog -->

		<!-- Capacity Form Dialog -->
		<el-dialog v-model="displayCapacityFormDialog" :title="`Edit Capacity`">
			<el-form ref="capacityForm" :model="capacityForm" label-width="165px">
				<el-form-item label="Unrestricted Capacity: ">
					<el-row>
						<el-radio
							v-model="capacityForm.isPlannedCapacityUnRestricted"
							:label="true"
						>
							True
						</el-radio>
						<el-radio
							v-model="capacityForm.isPlannedCapacityUnRestricted"
							:label="false"
						>
							False
						</el-radio>
					</el-row>
				</el-form-item>
				<el-form-item label="Current Capacity: ">
					{{ getBookedCapacity(capacityForm.bookedCapacity) }}
				</el-form-item>
				<el-form-item
					label="Planned Capacity"
					v-if="!capacityForm.isPlannedCapacityUnRestricted"
				>
					<el-col :span="7">
						<el-input
							:tabindex="5"
							:min="1"
							v-model="capacityForm.plannedCapacity.capacity"
							autocomplete="off"
							type="number"
							style="width: 100%"
						></el-input>
					</el-col>
					<el-col :span="7">
						<el-select
							v-model="capacityForm.plannedCapacity.capacityDimensionUnit"
							filterable
							placeholder="Dimension Unit"
							style="width: 100%"
							value-key="name"
							clearable
							:tabindex="6"
						>
							<el-option
								v-for="unit in capacityUnits"
								:key="unit"
								:label="unit"
								:value="unit"
							>
							</el-option>
						</el-select>
					</el-col>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button
						type="danger"
						@click="deleteCapacity(capacityFormEditType)"
						v-if="displayDeleteCapacityButton"
					>
						Delete Capacity
					</el-button>
					<el-button @click="capacityFormCancel()">Cancel</el-button>
					<el-button
						type="primary"
						@click="capacityEditConfirm(capacityFormEditType)"
					>
						Confirm
					</el-button>
				</span>
			</template>
		</el-dialog>
		<!-- Capacity Form Dialog -->
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import api from '@/services/apiService';
import { ElMessage } from 'element-plus';

export default defineComponent({
	name: 'View1',
	data() {
		return {
			loading: false,
			errorLoading: false,
		};
	},
	methods: {},
	created() {
		// this.updateData();
	},
});
</script>

<style lang="scss" scoped>
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
