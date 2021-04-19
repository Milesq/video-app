import { VideoError } from '../errors'

const API = 'https://api.vimeo.com/videos/'

export interface Picture {
  width: number
  link: string
}

export interface VimeoResponse {
  error?: string
  name: string
  likes: string
  embed: {
    html: string
  }
  created_time: string
  pictures: {
    sizes: Picture[]
  }
}

const fetchSingedReq = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_VIMEO_CLIENT_ID}`,
    },
  }).then(resp => resp.json())

async function getVimeoVideo(id: string): Promise<VimeoResponse> {
  const url = new URL(`${API}/${id}`)
  url.searchParams.set('fields', 'embed,name,created_time,pictures')

  const resp: VimeoResponse = await fetchSingedReq(url.href)

  if (resp.error) {
    return Promise.reject(VideoError.BadId)
  }

  const { total: likesCount } = await fetchSingedReq(
    `${API}/${id} /likes?fields=total`
  )

  return {
    ...resp,
    likes: likesCount,
  }
}

export default getVimeoVideo
