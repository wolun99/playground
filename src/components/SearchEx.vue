<template>
	<div>
		<input type="text" @input="searchKeyward" />
		<div v-for="list in lists" :key="list">
			<p>{{ list.name }}</p>
		</div>
	</div>
</template>

<script>
import data from '@/data';
export default {
	name: 'SearchEx',
	data() {
		return {
			lists: [],
			listsOri: [],
		};
	},
	methods: {
		getList() {
			this.lists = data;
			this.listsOri = data;
		},
		searchKeyward(e) {
			let search = e.target.value;
			console.log(search);
			let filtered = this.listsOri.filter(a => {
				return a.name.indexOf(search) != -1;
			});
			this.lists = [...filtered];
		},
	},
	mounted() {
		this.getList();
	},
};
</script>

<style scoped>
input {
	margin-bottom: 30px;
	height: 30px;
	padding-left: 10px;
}
</style>
