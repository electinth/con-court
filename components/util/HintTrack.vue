<template>
  <div id="hint-wrapper" class="flex">
    <div
      v-for="hint in hint_data"
      :key="hint.key"
      class="flex items-center B_05 md:mx-2.5 mx-1.5"
    >
      <div
        class="
          md:w-[12px]
          w-[9px]
          h-[9px]
          md:h-[12px]
          rounded-full
          border border-black
        "
        :class="{
          'bg-positiveGreen': hint.key === 'ผลบวก',
          'bg-negativeRed': hint.key === 'ผลลบ',
          'bg-absentGray': hint.key === 'เหตุการณ์',
          'border-absentGray': hint.key === 'เหตุการณ์',
        }"
      />
      <p class="ml-[5px]">
        {{ $mq === 'mobile' ? hint.name_mobile : hint.name_desktop }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hint_data: [
        {
          name_desktop: 'ผลบวกต่อรัฐบาล',
          name_mobile: 'เป็นผลบวก',
          key: 'ผลบวก',
        },
        { name_desktop: 'ผลลบต่อรัฐบาล', name_mobile: 'เป็นผลลบ', key: 'ผลลบ' },
        {
          name_desktop: 'เหตุการณ์',
          name_mobile: 'เหตุการณ์',
          key: 'เหตุการณ์',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
