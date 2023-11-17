import type { eventWithTime } from '@rrweb/types'

export interface PageRecord {
  day: string
  host: string
  url: string
  title: string
  events: eventWithTime[]
  startAt: number
  endAt: number
}

export const insetToIndexedDb = async (data: PageRecord) => {
  // TODO
  console.log('insetToIndexedDb', data)
}
