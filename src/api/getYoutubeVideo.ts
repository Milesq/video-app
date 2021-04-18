const API = 'https://youtube.googleapis.com/youtube/v3/videos'

export type YTResponse = {
  items: [
    {
      snippet: {
        publishedAt: string
        title: string
        thumbnails: {
          standard: {
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
    }
  ]
}

async function getYoutubeVideo(id: string): Promise<YTResponse> {
  const url = new URL(API)
  url.searchParams.set('part', 'snippet,statistics,player')
  url.searchParams.set('id', id)
  url.searchParams.set('key', process.env.REACT_APP_YT_API_KEY as string)

  const resp = await fetch(url.href)
  return await resp.json()
}

export default getYoutubeVideo
