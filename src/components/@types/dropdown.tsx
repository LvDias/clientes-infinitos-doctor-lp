export default interface IDropDownFaq {
  list : {
    question : string
    answer : {
      title : string
      desc : string
    }
  }[]
}