import { Video } from '../interfaces'

import YoutubeResolver from './YoutubeResolver'

function resolve(url: string): Promise<Video> {
  return new YoutubeResolver(url).getData()
}

export default resolve
