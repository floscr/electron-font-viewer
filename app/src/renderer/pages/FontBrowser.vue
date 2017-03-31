<template>
  <div>
    {{ allFonts }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'allFonts',
      'groupedFonts',
    ]),
  },
}
</script>
