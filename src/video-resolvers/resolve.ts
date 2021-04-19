import { Video } from '../interfaces'

import VimeoResolver from './VimeoResolver'

function resolve(url: string): Promise<Video> {
  return new VimeoResolver(url).getData()
}

export default resolve
