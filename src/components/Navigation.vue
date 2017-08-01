<template>
  <div class="pagination">
 	  <div class="pagination__left"><a @click.prevent="changePage(prevPage)">Prev</a></div>
 	  <div class="pagination__right"><a @click.prevent="changePage(nextPage)">Next</a></div>
  </div> 
</template>

<script>
	export default {
    template: '#navigation-template' ,
    props: {
    	current: Number,
    	default: 1
    },
    computed : {
    	nextPage: function () {
    		return this.current + 1
    	},
    	prevPage: function () {
    		return this.current - 1
    	}
    },
    methods: {
    	changePage: function(page) {
    		this.$emit('page-changed', page)
    	}
    }
  }
</script>