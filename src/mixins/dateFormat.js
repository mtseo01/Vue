export const dateFormat = {
  data() {
    return {
      sayMixin: '나는 믹스인입니다.'
    }
  },
  methods: {
    getDateAndTime(date) {
      if (date !== null) {
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const fullDate = `${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일`
        return `${fullDate} ${hours}시 ${minutes}분`
      } else {
        return null
      }
    }
  }
}
