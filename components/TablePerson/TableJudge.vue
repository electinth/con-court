<template>
  <div id="table-judge-wrapper" class="relative flex flex-col items-center">
    <HideMoreCase />
    <div
      v-for="judge in judge_data"
      :key="judge.number_person"
      class="relative border-l-2 border-r-2  w-max border-l-tableGray border-r-tableGray"
    >
      <el-popover placement="bottom" width="227" trigger="click">
        <PopOver :person="judge" :case_list_formated="PersonCase(judge)" />
        <img
          slot="reference"
          class="
            w-[40px]
            h-[40px]
            rounded-full
            border-black border
            cursor-pointer
            absolute
          "
          :src="
            require(`assets/images/ภาพตุลาการ/${ReplaceString(
              judge.name_surname_person
            )}.png`)
          "
          style="left: -60px; top: 50%; transform: translateY(-50%)"
        />
      </el-popover>
      <div class="flex justify-center" id="row">
        <div
          v-for="c in number_all_case"
          :key="c"
          class="flex items-center justify-center py-[18px] relative"
          :class="SetBG(c) ? 'bg-tableGray' : ''"
        >
          <div
            v-if="!judge[`case_${c}`]"
            class="
              bg-lightGrey
              relative
              z-10
              w-[24px]
              h-[24px]
              rounded-full
              border border-absentGray
              mx-[6px]
            "
          />
          <div
            v-else
            class="
              w-[24px]
              h-[24px]
              rounded-full
              border border-black
              mx-[6px]
              relative
              z-10
            "
            :class="
              judge[`case_${c}`] === 1 ? 'bg-positiveGreen' : 'bg-negativeRed'
            "
          />
          <div
            class="absolute z-0 w-full border-b-4 border-b-absentGray"
            :class="{
              'w-[50%] left-0': c === number_all_case,
              'w-[50%] right-0': c === 1,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Judge from 'static/contents/ตุลาการ.json'
import FormatPersonCase from '../util/FormatPersonCase'
import PopOver from '../Timeline/PopOver.vue'
import HideMoreCase from './HideMoreCase.vue'
export default {
  components: {
    PopOver,
    HideMoreCase,
  },
  data() {
    return {
      number_all_case: 22,
      judge_data: '',
      number_case_bg_gray: [
        1, 2, 3, 4, 7, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22,
      ],
    }
  },
  mounted() {
    this.judge_data = Judge
  },
  methods: {
    SetBG(case_number) {
      return this.number_case_bg_gray.includes(case_number)
    },

    ReplaceString(name) {
      return name.replaceAll(' ', '_')
    },
    PersonCase(list) {
      const case_list = FormatPersonCase(list)
      return this.SortPersonCaseNumber(case_list)
    },
    SortPersonCaseNumber(list) {
      return list.map((l) => ({
        name: l.name,
        list_case: l.list_case.sort((a, b) => b - a),
      }))
    },
  },
}
</script>

<style lang="scss" scoped></style>
