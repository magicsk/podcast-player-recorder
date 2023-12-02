import { CircularProgress, Grid } from "@mui/material";

export const Loading = () => (
  <Grid container height={'100vh'} justifyContent={'center'} alignItems={'center'}>
    <CircularProgress />
  </Grid>
)