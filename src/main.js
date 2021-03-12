import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

export const emitter = mitt()

export const urls = [
  { title: 'User details', url : 'https://api.github.com/users/github'},
  { title: 'Issues details', url: 'https://api.github.com/repos/cristianpdev/github-api/issues'}
]

createApp(App).mount('#app')
