import { Video } from '../interfaces'

abstract class Resolver {
  constructor(public url: string) {}

  abstract getData(): Video
}

export default Resolver
