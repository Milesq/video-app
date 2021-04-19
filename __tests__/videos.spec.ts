import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockedVideo = Symbol()

jest.mock('../src/video-resolvers/resolve.ts', () => () => mockedVideo)

import { videos } from '../src/store'
import demoVideos from '../src/utils/demoVideos'

const mockStore = configureMockStore([thunk])

describe('videos', () => {
  it('add video', async () => {
    const store = mockStore({
      videos: {
        videos: [],
      },
    })

    await store.dispatch(videos.addVideo('movieID') as any)

    const actions = store.getActions()
    const lastAction = actions[actions.length - 1]

    expect(lastAction.type).toBe(videos.addVideo.fulfilled.toString())
    expect(lastAction.payload[0]).toBe(mockedVideo)
  })

  it('clear list', async () => {
    const state = {
      videos: {
        videos: demoVideos(),
        error: null,
        pending: false,
      },
    }

    const newState = videos.reducer(state as any, videos.clearAll())

    expect(newState.videos.length).toBe(0)
  })
})
