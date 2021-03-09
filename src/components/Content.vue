<template>
<div>
  <div v-for="item in currentOption" v-bind:key="item.name">
      <label  :for="item.name" >{{item.title}}:</label><br>
      <img :src="item.value" width="30" v-if="item.name == 'avatar_url'">
      <h4 v-bind:id="item.name" v-else>{{item.value}}</h4>
  </div>
</div>
</template>

<script>
import {emitter, selectOptions} from '../main.js'
import axios from 'axios'

export default {
  name: 'Content',
  data: function(){
    return {
      selectOptions,
      currentOption: null
    }
  },
  methods: {
    getData(url){
      axios.get(url)
      .then(res => {
        if(res.data[0] == undefined) {
        this.currentOption = this.selectOptions[0].data

        this.currentOption.map(prop => {
            prop.value = res.data[prop.name]
          })
        }
         else {
          this.currentOption = this.selectOptions[1].data
          this.currentOption.map(prop => {
            prop.value = res.data[0][prop.name]
          })
        }
      })
      .then()
    }
  },
  mounted() {
    emitter.on('change-data-option', value => {
      this.getData(value)
    })
  },
}
</script>

<style >
</style>
