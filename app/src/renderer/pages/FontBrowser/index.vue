<template>
  <div>
    <font-list :fonts="allFonts"></font-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FontList from './components/FontList.vue'

export default {

  computed: {
    ...mapGetters([
      'allFonts',
      'groupedFonts',
    ]),
  },

  components: {
    FontList,
  },

}
</script>
