import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'

import { RSSFeedItem } from '../types'

interface IPodcastFeedListItem {
  title: string
  episode: RSSFeedItem
  defaultImage: string
  playPauseAudio: (url: string) => void
}

export const PodcastFeedListItem = ({
  title,
  episode,
  defaultImage,
  playPauseAudio,
}: IPodcastFeedListItem) => {
  return (
    <ListItemButton
      sx={{ p: '8px 12px', gap: '15px' }}
      onClick={() => playPauseAudio(episode.enclosure.url)}
    >
      <ListItemAvatar>
        <Avatar
          src={episode.itunes?.image ?? defaultImage}
          sx={{
            borderRadius: '12px',
            width: 72,
            height: 72,
          }}
        />
      </ListItemAvatar>
      <ListItemText primary={episode.title} secondary={title} />
    </ListItemButton>
  )
}
