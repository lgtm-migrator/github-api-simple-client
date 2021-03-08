import { createApp } from 'vue'
import App from './App.vue'

export const userData = [
    {title: 'Username', name: 'login', value: null},
    {title: 'Avatar', name: 'avatar_url', value: null},
    {title: 'Type Account', name: 'type', value: null},
    {title: 'Bio', name: 'bio', value: null},
    {title: 'Name', name: 'name', value: null},
    {title: 'Public repos', name: 'public_repos', value: null},
]

export const userDataUrl = 'https://api.github.com/users/github'
export const issuesDataUrl = 'https://api.github.com/repos/cristianpdev/github-api/issues'

createApp(App).mount('#app')
