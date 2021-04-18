export default interface Video {
  id: string
  title: string
  src: string
  embedHtml: string

  views?: number
  likes: number
  uploadDate: number

  isFavorite?: boolean
}
