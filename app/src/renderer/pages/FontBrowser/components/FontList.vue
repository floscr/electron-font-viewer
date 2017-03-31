<template>
  <div>
    <ul>
      <li v-for="font in fonts">
        <thumbnail :font="font[0]"></thumbnail>
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

<style lang="scss" scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  ul, li {
    width: 100%;
  }
  li {
    list-style-type: none;
    padding: 10px;
  }
</style>
