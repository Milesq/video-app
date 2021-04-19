import getVimeoVideo, { Picture } from '../api/getVimeoVideo'
import { Video } from '../interfaces'

import Resolver from './Resolver'

class VimeoResolver extends Resolver {
  getPicture(pictures: Picture[]): Picture {
    const goodQualityPicture = pictures.find(({ width }) => width > 1000)
    const lastPicture = pictures[pictures.length]

    return goodQualityPicture || lastPicture
  }

  checkId(): boolean {
    return /^[0-9]$/.test(this.id)
  }

  async getData(): Promise<Video> {
    const {
      created_time,
      embed: { html: embedHtml },
      likes,
      name,
      pictures: { sizes: pictures },
    } = await getVimeoVideo(this.id)

    return {
      id: this.id,
      title: name,
      src: this.getPicture(pictures).link,
      embedHtml,

      likes: parseInt(likes),
      uploadDate: new Date(created_time).getTime(),
    }
  }
}

export default VimeoResolver
