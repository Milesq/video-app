import { Video } from '../interfaces'

import Resolver from './Resolver'

class YoutubeResolver extends Resolver {
  getData(): Video {
    return {
      title: '',
      views: 0,
      likes: 0,
      src: '',
      tileSrc: '',
      uploadDate: new Date(),
    }
  }
}

export default YoutubeResolver
