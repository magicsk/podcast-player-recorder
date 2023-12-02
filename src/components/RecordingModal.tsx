import { Grid, Link, Modal, Typography } from '@mui/material'

interface IRecordingModal {
  open: boolean
  handleClose: () => void
  downloadUrl: string | undefined
}

export const RecordingModal = ({
  open,
  handleClose,
  downloadUrl,
}: IRecordingModal) => (
  <Modal open={open} onClose={handleClose}>
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
      <Typography variant="h5" fontWeight={'bold'} gutterBottom>
        Recording ready!
      </Typography>
      <Typography>
        Download recording by clicking link below.
      </Typography>
      {downloadUrl ? (
        <Link href={downloadUrl} download="Recording.mp3">
          {downloadUrl}
        </Link>
      ) : (
        <Typography color={'error'}>
          Error, download link unavailable.
        </Typography>
      )}
    </Grid>
  </Modal>
)
