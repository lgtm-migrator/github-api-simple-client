<template>
  <div>
    <div>
    <label>Select the data to be displayed</label>
    </div>
    <select 
      @change="changeDataToBeDisplayed($event)" 
    >
      <option 
        value="-1"
      >
        Select your option
      </option>
      <option 
        v-for="option in urls" 
        :key="option"
        :value="option.url"
      >
        {{option.title}}
      </option>
    </select>
    <hr>
  </div>
</template>

<script>
import { emitter, urls } from '../main'

export default {
  name: 'DataSelect',
  data: function() {
    return {
      urls
    }
  },
  methods: {
		changeDataToBeDisplayed(event) {
      if(event.target.value != -1) {
        emitter.emit('change-data-option', event.target.value)
      }
		}
	}
}
</script>

<style>
select {
  margin-top: 1.2em;
}
</style>