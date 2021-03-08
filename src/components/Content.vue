<template>
  <div v-for="item in userData" v-bind:key="item.name">
    <div >
      <label v-bind:for="item.name" >{{item.title}}:</label>
      <img :src="item.value" width="30" v-if="item.name == 'avatar_url'">
      <p v-bind:id="item.name" v-else>{{item.value}}</p>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import {userDataUrl, userData} from '../main.js'
import axios from 'axios'

export default {
  name: 'Content',
  data: function(){
    return {
      userData,
    }
  },
  methods: {
    getUserData(url){
      axios.get(url)
      .then(res => {
        this.userData.map(prop => {
          prop.value = res.data[prop.name]
        })
      })
    }
  },
  mounted() {
    this.getUserData(userDataUrl)
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
