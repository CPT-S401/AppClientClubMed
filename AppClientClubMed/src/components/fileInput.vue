<template>
	<div class="relative">
		<div
			class="imagePreviewWrapper"
			:class="styleImg"
			:style="{ 'background-image': `url(${previewImage})` }">
			<label
				v-if="editFile"
				:for="uniqueId"
				class="absolute inset-0 flex justify-center items-center cursor-pointer">
				<p
					class="text-white bg-black hover:bg-secondary-bg py-2 px-5 rounded-full">
					+
				</p>
				<input
					ref="fileInput"
					:id="uniqueId"
					type="file"
					@input="pickFile"
					class="hidden" />
			</label>
			<label v-else class="hidden" :for="uniqueId"></label>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				previewImage: this.Urlimg,
				uniqueId: `fileInput-${Math.random()
					.toString(36)
					.substring(7)}`,
			};
		},
		props: {
			Urlimg: {
				type: String,
				default: "",
			},
			styleImg: {
				type: String,
				default: "w-32 h-32",
			},
			editFile: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			pickFile() {
				let input = this.$refs.fileInput;
				let file = input.files;
				if (file && file[0]) {
					let reader = new FileReader();
					reader.onload = (e) => {
						this.previewImage = e.target.result;
					};
					reader.readAsDataURL(file[0]);
					this.$emit("input", file[0]);
				}
			},
		},
	};
</script>

<style scoped>
	input {
		display: none;
	}

	.imagePreviewWrapper {
		display: block;
		cursor: pointer;
		background-size: cover;
		background-position: center center;
	}
</style>
