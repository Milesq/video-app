import { VideoError } from '../errors'
import { Video } from '../interfaces'
import { findMapAsync } from '../utils'

import VimeoResolver from './VimeoResolver'
import YoutubeResolver from './YoutubeResolver'

const resolvers = [VimeoResolver, YoutubeResolver]

async function resolve(url: string): Promise<Video> {
  const possibleResolvers = resolvers
    .map(ResolverClass => new ResolverClass(url))
    .filter(resolver => resolver.checkId())

  const firstGoodVideo = findMapAsync(possibleResolvers, async resolver => {
    return resolver.getData().catch(() => null)
  }).then(video => {
    if (video === null) {
      throw new Error(VideoError.UnknownProvider)
    }

    return video
  })

  return firstGoodVideo
}

export default resolve
