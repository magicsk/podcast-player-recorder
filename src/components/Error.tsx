import { Button, Grid, Typography } from '@mui/material'

interface IError {
  reload: () => void
}

export const Error = ({ reload }: IError) => (
  <Grid
    container
    height={'100vh'}
    direction={'column'}
    justifyContent={'center'}
    alignItems={'center'}
  >
    <Typography>Unable to load the list.</Typography>
    <Button variant="contained" sx={{ mt: 2 }} onClick={reload}>
      Retry
    </Button>
  </Grid>
)
