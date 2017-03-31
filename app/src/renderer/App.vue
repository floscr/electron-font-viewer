<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from 'renderer/vuex/store'
import { mapActions } from 'vuex'

export default {
  store,

  mounted () {
    this.loadFonts()
  },

  methods: {
    ...mapActions([
      'loadFonts'
    ]),
  },
}
</script>

<style lang="scss" src="./styles/global.scss"></style>
<style src="app-reset/app-reset.css"></style>
