import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

export const emitter = mitt()
export const selectOptions = [
    { title: 'user details', url : 'https://api.github.com/users/github', 
    data: [
        {title: 'Username', name: 'login', value: null},
        {title: 'Avatar', name: 'avatar_url', value: null},
        {title: 'Type Account', name: 'type', value: null},
        {title: 'Bio', name: 'bio', value: null},
        {title: 'Name', name: 'name', value: null},
        {title: 'Public repos', name: 'public_repos', value: null},
    ]},
    { title: 'issues details', url: 'https://api.github.com/repos/cristianpdev/github-api/issues', 
    data: [
        {title: 'URL', name: 'url', value: null},
        {title: 'Title', name: 'title', value: null},
        {title: 'Body', name: 'body', value: null},
        {title: 'Author', name: 'author_association', value: null},
        {title: 'State', name: 'state', value: null},
        {title: 'Comments', name: 'comments', value: null},        
    ]},
    
]

createApp(App).mount('#app')
