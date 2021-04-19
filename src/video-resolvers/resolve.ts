import { Video } from '../interfaces'

import VimeoResolver from './VimeoResolver'

function resolve(url: string): Promise<Video> {
  new VimeoResolver(url).checkId()
  return Promise.resolve({} as any)
}

export default resolve
