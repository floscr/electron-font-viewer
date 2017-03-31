<template>
  <div>
    <virtual-scroller
      class="scroller"
      :items="fonts"
      item-height="200"
      content-tag="ul"
      >
      <template scope="props">
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg" style="height: 30%" alt="">
          {{ props.item[0].family }}
        </li>
      </template>
    </virtual-scroller>
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

<style lang="scss">
.scroller {
  ul {
    // display: flex;
    // flex-wrap: wrap;
    width: 100%;
    display: grid;
    // grid-gap: 10px;
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    margin: 0;
    padding: 0;
  }
  li {
    width: 100%;
    padding: 5px;
    height: 200px;
    max-height: 200px;
    list-style-type: none;
  }

}
</style>
