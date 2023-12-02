import { Grid } from '@mui/material'

import { BottomBar, PodcastFeedContainer, TopBar } from './components'

const App = () => (
  <Grid container sx={{p: '45px 0'}}>
    <TopBar />
    <PodcastFeedContainer />
    <BottomBar />
  </Grid>
)

export default App
