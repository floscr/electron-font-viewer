<template>
  <div class="container" :style="{ fontFamily: font.family }" tabindex="0">
    <div class="font-name">{{ font.family }}</div>
    <svg class="font-preview" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <text x="0" y="100%">Aa</text>
    </svg>
    <div class="font-family">
      {{ font.family }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    font: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
$color-beige: #EDEDED;

.container {
  width: 100%;
  height: 100%;

  position: relative;

  border: 1px solid darken($color-beige, 5%);
  background-color: #fff;
  border-radius: 5px;

  box-shadow: 0 2px 2px rgba(black, 0.05);
  overflow: hidden;

  &:focus {
    outline: none;
    box-shadow:
      inset 0 0 0 4px rgba(158, 199, 204, 0.3),
      0 2px 3px rgba(black, 0.1)
    ;
    border-color: rgba(103, 187, 206, 0.5);
  }

}

.font-family {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;

  color: #182114;
  font-size: 1.3em;
  text-align: center;
  z-index: 2;
}

.font-name {
  position: absolute;
  top: 0.6em;
  left: 10px;

  text-transform: uppercase;
  color: darken($color-beige, 16%);
  font-size: 0.7em;
  letter-spacing: 0.1em;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.font-preview {
  position: absolute;
  bottom: 0.15em;
  left: 0.15em;
  width: 100%;
  height: 100px;
  font-size: 6em;
  line-height: 0.85;
  fill: rgba($color-beige, 0.5);
  z-index: 1;
}
</style>
