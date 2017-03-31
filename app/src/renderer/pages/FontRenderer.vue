<template>
  <div>
    <thumbnail :font="font" class="thumb" ref="thumb"></thumbnail>
    <button @click="render">Render</button>
  </div>
</template>

<script>
import Thumbnail from './FontBrowser/components/Thumbnail'
import { ipcRenderer } from 'electron'

import { mapGetters } from 'vuex'

export default {
  data: () => ({
    font: '',
  }),

  methods: {
    changeFont (font) {
      return new Promise((resolve, reject) => {
        this.font = font
        setTimeout(() => { resolve() }, 10)
      })
    },

    saveImage (bounds, family) {
      return new Promise((resolve, reject) => {
        ipcRenderer.send('SAVE_IMAGE', { bounds, family })
        ipcRenderer.on('IMAGE_SAVED', event => {
          resolve()
        })
      })
    },

    async render (event) {
      const { left: x, top: y, width, height } = this.$refs.thumb.$el.getBoundingClientRect()

      for (let font of this.groupedFonts) {
        const fontFamily = font[0].family
        await this.changeFont(fontFamily)
        await this.saveImage({ x, y, width, height }, fontFamily)
      }

      console.log('done')
    },
  },

  computed: {
    ...mapGetters([
      'allFonts',
      'groupedFonts',
    ]),
  },

  components: {
    Thumbnail,
  },
}
</script>

<style>
.thumb {
  display: block;
  width: 400px !important;
  height: 400px !important;
}
</style>
