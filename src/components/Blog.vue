<template>
  <div class="posts_dinamic_wrapper">
    <div class="posts-list" id="posts-list">
  		<div class="post_dinamic" v-for="post in posts">
  			<span>{{post.id }}</span>
  			<h3>{{post.title}}</h3>
        <p>{{ post.body}}</p>
  		</div>
    </div>
    <button @click="onClick" class="more-button">more</button>
	</div>
</template>

<script>
	import VueResource from 'vue-resource'
  import Vue from 'vue'

  Vue.use(VueResource)

	export default {
    data: function () {
     	return {
     		endpoint: 'https://jsonplaceholder.typicode.com/posts',
        posts: [],
        totalPosts: 0,
        perPage: 10,
        currentPage: 1,
     	}        
    },
    methods: {
      getAllPosts: function() {
            var options = {
              params: {
                _page: this.currentPage,
                _limit: this.perPage
              }
            }

            this.$http.get(this.endpoint, options).then(function(response) {  

                var json = response.data
                
                this.posts = this.posts.concat(json)
       

            }, function() {
                
            })

        },

    getMorePosts: function (){
          var options = {
                  params: {
                    _page: this.currentPage,
                    _limit: this.perPage
                  }
                }

            this.$http.get(this.endpoint, options).then(function(response) {  
                 

                this.currentPage += 1
                
                var json = response.data
                
                this.posts = this.posts.concat(json)
       

            }, function() {
                
            })

        },   

    onClick: function() {
        this.currentPage += 1
        this.getAllPosts()
      }
    },

    created: function() {
    	this.getAllPosts()
    }

  }  

</script>