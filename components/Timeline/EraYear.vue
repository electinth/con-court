<template>
  <div
    id="era-year-wrapper"
    class="px-6 py-1 mx-auto font-bold text-center text-white bg-black  H_05 w-max"
  >
    {{ date.slice(date.length - 4) }}
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
