import getYoutubeVideo from '../api/getYoutubeVideo'
import { Video } from '../interfaces'

import Resolver from './Resolver'

class YoutubeResolver extends Resolver {
  checkId(): boolean {
    console.log(this.id)
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

    return {
      id,
      title,
      src: thumbnails.standard.url,
      embedHtml,

      views: parseInt(viewCount),
      likes: parseInt(likeCount),
      uploadDate: new Date(publishedAt).getTime(),
    }
  }
}

export default YoutubeResolver
