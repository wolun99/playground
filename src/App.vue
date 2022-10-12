<template>
	<div>
		<div class="menu">
			<router-link to="/">메인홈</router-link>
			<router-link to="/search">검색기능</router-link>
			<router-link to="/uploaded">파일업로드</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
@import url('./assets/main.css');
</style>
