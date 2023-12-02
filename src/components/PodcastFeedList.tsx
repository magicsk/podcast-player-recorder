import { List } from '@mui/material'

import { RSSFeed } from '../types'
import { PodcastFeedListItem } from './PodcastFeedListItem'

interface IPodcastFeedList {
  podcast: RSSFeed
  player: HTMLAudioElement
}

export const PodcastFeedList = ({
  podcast,
  player,
}: IPodcastFeedList) => {
    const playPauseAudio = (url: string) => {
      if (player.currentSrc == url) {
        if (player.paused) {
          player.play()
        } else {
          player.pause()
        }
      } else {
        player.src = url
        player.load()
        player.play()
      }
    }

    return (
      <List sx={{width: '100%'}}>
        {podcast?.items?.map((episode) => (
          <PodcastFeedListItem
            key={episode?.guid}
            title={podcast?.title}
            episode={episode}
            defaultImage={podcast?.image?.url}
            playPauseAudio={playPauseAudio} />
        ))}
      </List>
    )
  }
