<template>
  <div id="app">
    <topmenu></topmenu>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import topmenu from './components/topmenu'   
import myfooter from './components/myfooter' 
 
export default {
  name: 'App',
  components:{topmenu,myfooter}
}
</script>

<style>

</style>
