import { VideoError } from '../errors'

const API = 'https://youtube.googleapis.com/youtube/v3/videos'

export interface YTResponse {
  items: {
    id: string
    snippet: {
      publishedAt: string
      title: string
      thumbnails: {
        high: {
          url: string
        }
      }
    }
    statistics: {
      viewCount: string
      likeCount: string
    }
    player: {
      embedHtml: string
    }
  }[]
}

async function getYoutubeVideo(id: string): Promise<YTResponse> {
  const url = new URL(API)
  url.searchParams.set('part', 'snippet,statistics,player')
  url.searchParams.set('id', id)
  url.searchParams.set('key', process.env.REACT_APP_YT_API_KEY as string)

  const resp: YTResponse = await fetch(url.href).then(resp => resp.json())

  if (resp.items.length === 0) {
    return Promise.reject(VideoError.BadId)
  }

  return resp
}

export default getYoutubeVideo
