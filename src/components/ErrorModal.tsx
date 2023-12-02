import { Grid, Modal, Typography } from '@mui/material'

interface IErrorModal {
  error: string | null | undefined
  handleClose: () => void
}

export const ErrorModal = ({
  error,
  handleClose,
}: IErrorModal) => (
  <Modal open={!!error} onClose={handleClose}>
    <Grid
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        maxWidth: '500px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '15px',
      }}
    >
      <Typography variant="h5"  fontWeight={'bold'} gutterBottom>
        Unable to start recording
      </Typography>
      <Typography>
        {error}
      </Typography>
    </Grid>
  </Modal>
)
