new Vue({
	el: '#app',
	data: {
		discs: [],
	},
	created() {
		axios.get('http://localhost/php-ajax-dischi/api.php')
			.then(response => this.discs = response.data);
	}
})