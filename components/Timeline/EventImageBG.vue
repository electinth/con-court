<template>
  <div
    id="event-img"
    class="absolute w-full h-full bg-black bg-opacity-50"
    style="z-index: -1"
  >
    <div
      class="max-w-[100%] h-full bg-cover bg-center mix-blend-multiply bg-top"
      :style="{
        'background-image':
          'url(' + require(`assets/images/event_img/${index_image}.jpg`) + ')',
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    index_image: {
      type: Number,
      required: false,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped></style>
