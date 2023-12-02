import { Grid, Typography } from '@mui/material'

export const TopBar = () => (
  <Grid
    container
    alignItems={'center'}
    position={'fixed'}
    zIndex={1000}
    boxShadow={24}
    p={'12px'}
    top={0}
    bgcolor={'background.default'}
  >
    <Typography variant="h5" fontWeight={'bold'}>
      All episodes
    </Typography>
  </Grid>
)
