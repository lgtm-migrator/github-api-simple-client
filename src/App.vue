<template>
  <div>
    <Header />
    <DataSelect />
    <Content />
  </div>
</template>

<script>
import Content from './components/Content.vue'
import DataSelect from './components/DataSelect'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Content,
    DataSelect,
    Header
  }
}
</script>

<style>
* {
  background-color: #0D1017;
  color: #F0F5FC;
}
#app {
  background-color: #0D1017;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
