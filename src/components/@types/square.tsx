export default interface ISquare {
  type : string
  content : {
    image ?: string
    hashtag ?: string
    title : string
    desc : string
  }[]
}

export interface ISquareComponent {
  image ?: string
  hashtag ?: string
  title : string
  desc : string
}