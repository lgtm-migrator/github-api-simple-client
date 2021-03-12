<template>
<div>
  <div 
    v-for="(item, key) in data" 
    :key="key"
  >
      <label> 
        {{ key.toUpperCase() }}:
      </label>
      <br>
      <img 
        v-if="key === 'avatar_url'" 
        width="30" 
        :src="item" 
      >
      <h4 
        v-else
      >
      {{ item }}
      </h4>
  </div>
</div>
</template>

<script>
import { emitter } from '../main.js'
import axios from 'axios'

export default {
  name: 'Content',
  data: function(){
    return {
      data: {},
      issueData: [],
    }
  },
  methods: {
    getData(url){
      axios.get(url)
      .then(res => {
        if(res.data[0] === undefined) {
          this.data = res.data
        } else {
          this.data = res.data[0]
        }
      })
    }
  },
  mounted() {
    emitter.on('change-data-option', value => this.getData(value))
  },
}
</script>

<style >
</style>
