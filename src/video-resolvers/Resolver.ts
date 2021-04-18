import { Video } from '../interfaces'

abstract class Resolver {
  constructor(public url: string) {}

  abstract getData(): Promise<Video>
}

export default Resolver
