<template>
  <div class="blog">
  	<div class="blog__post" v-for="(post, index) in posts">
      <img :src="post.image" alt="">
      <h3>{{post.title}}</h3>
      <router-link :to="{ name: 'post', params: { id: index } }">Read</router-link>
    </div>
  </div>
</template>

<script>
  import posts from '../data/posts'
	export default {
    data: function () {
      return {
        posts: posts 
      }
    }   
  }
</script>