<template>
  <div>
  <navigation :current="currentPage" @page-changed="fetchPhotos"></navigation>
  <div class="grid">
  <div class="grid__item card" v-for="photo in photos">
        <div class="card__body">
          <img :src="photo.urls.small" alt="">
        </div>
        <div class="card__footer media">
          <img :src="photo.user.profile_image.small" alt="" class="media__obj">
          <div class="media__body">
            <a :href="photo.user.portfolio_url" target="_blank">{{ photo.user.name }}</a>
          </div>
        </div>
      </div> 
      </div>
 </div>
</template>

<script>
import Navigation from '@/components/Navigation'
  export default {
  	components: {Navigation}, 
    data: function(){
    	return {
    		photos: [],
    		totalPhotos: 0,
    		perPage: 9,
    		currentPage: 1, 
    	}
    },
    methods: {
    	fetchPhotos: function(page) {
    		var options = {
           params: {
           	client_id: 'b727f9d41d09a1d79f3e6958092ea6d88e9206097c380c1232089d4ba83c1923',
           	page: page,
           	per_page: this.perPage
           }
    		}
    		this.$http.get('https://api.unsplash.com/photos', options).then(function(response){
    			 this.photos = response.data

    			 this.totalPhotos = parseInt(response.headers.get('x-total'))

    			 this.currentPage = page

    		}, console.log)
    	}
    },
    created: function(){
    	this.fetchPhotos(this.currentPage)
    }
  }
</script>