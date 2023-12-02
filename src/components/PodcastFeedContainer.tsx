import { useEffect, useState } from 'react'
import Parser from 'rss-parser'

import { RSSFeed } from '../types'
import { Error } from './Error'
import { Loading } from './Loading'
import { PodcastFeedList } from './PodcastFeedList'

export const PodcastFeedContainer = () => {
  const [feed, setFeed] = useState<RSSFeed | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const player = new Audio()

  const loadRss = async () => {
    try {
      const parser = new Parser<RSSFeed>()
      const parsedRss: RSSFeed = await parser.parseURL(
        'https://anchor.fm/s/5c60f854/podcast/rss'
      )
      if (parsedRss) {
        setFeed(parsedRss)
      } else {
        setIsError(true)
      }
    } catch (_) {
      setIsError(true)
    }
  }

  useEffect(() => {
    loadRss()
  }, [])

  useEffect(() => {
    if (feed) {
      setIsError(false)
      setIsLoading(false)
    }
  }, [feed])

  if (isError) return <Error reload={loadRss}/>
  if (isLoading) return <Loading />
  return <PodcastFeedList podcast={feed!} player={player} />
}
