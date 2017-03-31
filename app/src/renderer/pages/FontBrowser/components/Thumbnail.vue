<template>
  <div>
    {{ font }}
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
