<template>
	<div>
		<h2>파일 업로드하고 그 이름 가져오기</h2>
		<input
			type="file"
			name="file"
			id="file"
			ref="file"
			@input="uploadFileName"
		/>
		<p>파일이름은 : {{ file }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			file: '',
		};
	},
	methods: {
		uploadFileName() {
			this.file = this.$refs.file.files[0].name;
			console.log(this.$refs.file.files[0]);
		},
	},
};
</script>

<style scoped>
h2 {
	margin-bottom: 30px;
}
p {
	margin-top: 50px;
}
</style>
