import { Video } from '../interfaces'
import { findMapAsync } from '../utils'

import VimeoResolver from './VimeoResolver'
import YoutubeResolver from './YoutubeResolver'

const resolvers = [VimeoResolver, YoutubeResolver]

async function resolve(url: string): Promise<Video | null> {
  const possibleResolvers = resolvers
    .map(ResolverClass => new ResolverClass(url))
    .filter(resolver => resolver.checkId())

  const firstGoodVideo = findMapAsync(possibleResolvers, async resolver => {
    return resolver.getData().catch(() => null)
  })

  return firstGoodVideo
}

export default resolve
