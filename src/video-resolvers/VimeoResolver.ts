import getVimeoVideo, { Picture } from '../api/getVimeoVideo'
import { Video } from '../interfaces'

import Resolver from './Resolver'

class VimeoResolver extends Resolver {
  getPicture(pictures: Picture[]): Picture {
    const goodQualityPicture = pictures.find(({ width }) => width > 1000)
    const lastPicture = pictures[pictures.length]

    return goodQualityPicture || lastPicture
  }

  async getData(): Promise<Video> {
    const {
      created_time,
      embed: { html: embedHtml },
      likes,
      name,
      pictures: { sizes: pictures },
    } = await getVimeoVideo(this.url)

    return {
      id: this.url,
      title: name,
      src: this.getPicture(pictures).link,
      embedHtml,

      likes: parseInt(likes),
      uploadDate: new Date(created_time).getTime(),
    }
  }
}

export default VimeoResolver
