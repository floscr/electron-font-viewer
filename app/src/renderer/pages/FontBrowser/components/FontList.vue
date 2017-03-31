<template>
  <div>
    <ul>
      <li v-for="font in fonts">
        <thumbnail :font="font"></thumbnail>
      </li>
    </ul>
  </div>
</template>

<script>
import Thumbnail from './Thumbnail'

export default {

  props: {
    fonts: {
      type: Array,
      required: true,
    }
  },

  components: {
    Thumbnail,
  },

}
</script>
