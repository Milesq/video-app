import getYoutubeVideo from '../api/getYoutubeVideo'
import { Video } from '../interfaces'
import { setElementSizeFromString } from '../utils'

import Resolver from './Resolver'

class YoutubeResolver extends Resolver {
  checkId(): boolean {
    return true
  }

  async getData(): Promise<Video> {
    const {
      items: [
        {
          id,
          snippet: { publishedAt, title, thumbnails },
          statistics: { likeCount, viewCount },
          player: { embedHtml },
        },
      ],
    } = await getYoutubeVideo(this.id)

    const iframe = setElementSizeFromString(embedHtml) as string

    return {
      id,
      src: `https://www.youtube.com/watch?v=${id}`,
      title,
      img: thumbnails.high.url,
      embedHtml: iframe,

      views: parseInt(viewCount),
      likes: parseInt(likeCount),
      uploadDate: new Date(publishedAt).getTime(),
    }
  }
}

export default YoutubeResolver
