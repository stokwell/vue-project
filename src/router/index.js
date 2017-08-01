import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import Projects from '@/components/Projects'
import Contacts from '@/components/Contacts'
import Blog from '@/components/Blog'
import Pagination from '@/components/Pagination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    }
  ]
})
