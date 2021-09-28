<template>
  <div
    class="absolute w-full h-full duration-150 border-t  bg-lightGrey border-t-black card-wrapper"
    :id="`card_${index}`"
    value="off"
  >
    <div
      :id="`header_${index}`"
      class="
        md:h-[42px]
        h-[24px]
        bg-white
        md:px-5
        px-2
        flex
        items-center
        justify-between
        cursor-pointer
      "
      @click="openCard"
    >
      <p class="B_05">คำอธิบายเพิ่มเติม</p>
      <img
        class="w-[10px] md:w-[20px]"
        :src="require('assets/images/open_card.svg')"
        :id="`open_card_${index}`"
      />
    </div>
    <div
      id="content-body"
      v-html="data.description_formated"
      class="p-3 overflow-y-auto md:p-5 B_05"
    />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: false,
      default: 0,
    },
    data: {
      type: Object,
      required: false,
      default: {},
    },
  },
  methods: {
    openCard() {
      const elem = document.getElementById(`card_${this.index}`)
      const header = document.getElementById(`header_${this.index}`)
      const open = document.getElementById(`open_card_${this.index}`)

      if (elem.getAttribute('value') === 'off') {
        if (elem) elem.style.top = '0'
        header.style.borderTop = '0px'
        header.style.borderBottom = '1px solid #000000'
        open.style.transform = ' rotate(180deg)'
        elem.setAttribute('value', 'on')
      } else {
        if (elem)
          elem.style.top =
            this.$mq === 'mobile' ? 'calc(100% - 24px)' : 'calc(100% - 42px)'
        open.style.transform = ' rotate(0)'
        elem.setAttribute('value', 'off')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#content-body {
  height: calc(100% - 42px);
  @media screen and (max-width: 767px) {
    height: calc(100% - 24px);
  }
}
.card-wrapper {
  top: calc(100% - 42px);
  @media screen and (max-width: 767px) {
    top: calc(100% - 24px);
  }
}
</style>
