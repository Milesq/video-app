import memoize from 'lodash.memoize'

import { VideoError } from '../errors'
import { Video } from '../interfaces'

abstract class Resolver {
  protected id: string

  abstract checkId(): boolean
  abstract getData(): Promise<Video>

  constructor(url: string) {
    this.id = this.transformUrl(url)
  }

  transformUrl = memoize(this.internalTransformUrl)

  private internalTransformUrl(urlOrId: string): string {
    const coveredHostnames = ['youtu.be', 'vimeo.com']

    try {
      const url = new URL(urlOrId)

      const vParameter = url.searchParams.get('v')
      if (vParameter) return vParameter

      if (!coveredHostnames.includes(url.hostname)) {
        throw new Error(VideoError.ParseError)
      }

      const pathParts = url.pathname.split('/').filter(el => el)

      if (pathParts.length === 0) {
        throw new Error(VideoError.ParseError)
      }

      return pathParts[0]
    } catch (err) {
      if (err instanceof TypeError) return urlOrId
      else throw err
    }
  }
}

export default Resolver
