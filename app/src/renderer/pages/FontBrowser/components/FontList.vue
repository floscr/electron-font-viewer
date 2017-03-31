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
    // display: flex;
    // flex-wrap: wrap;
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    margin: 0;
    padding: 0;
  }
  li {
    height: 200px;
    list-style-type: none;
  }
</style>
