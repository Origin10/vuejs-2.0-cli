
<template lang="pug">
.todo
	.loading(v-if='loading')
		| Loading...
	.error(v-if='error')
		| {{ error }}
	.content(v-if='todo')
		h2 {{ todo.title }}
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      todo: null,
      error: null
    }
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.todo = null
      this.loading = true
      this.axios.get('http://localhost/jugze/public/api/todo/' + this.$route.params.id).then(response => {
        console.log(response.data)
        this.todo = response.data
        this.loading = false
      })
    }
  }
}
</script>
<style lang="sass">

</style>
