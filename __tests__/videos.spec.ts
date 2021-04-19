import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockedVideo = Symbol()

jest.mock('../src/video-resolvers/resolve.ts', () => () => mockedVideo)

import { videos } from '../src/store'

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
})
