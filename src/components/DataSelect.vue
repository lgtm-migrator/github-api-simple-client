<template>
  <div>
  <label>Select the data to be displayed</label>
</div>
  <select v-on:change="changeDataToBeDisplayed($event)" 
    >
    <option value="-1">Select your option</option>
    <option v-for="option in selectOptions" v-bind:key="option"
      v-bind:value="option.url">{{option.title}}</option>
  </select>
  <hr>
</template>

<script>
import {emitter, selectOptions} from '../main'

export default {
  name: 'DataSelect',
  data: function() {
    return {
      selectOptions
    }
  },
	methods: {
		changeDataToBeDisplayed(event){
      if(event.target.value != -1) {
        emitter.emit("change-data-option", event.target.value)
      }
		}
	}
}
</script>

<style>
</style>