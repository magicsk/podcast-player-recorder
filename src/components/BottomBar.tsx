import { useMemo, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { Recorder } from 'vmsg'

import { RecordingModal } from './RecordingModal'
import { ErrorModal } from '.'

export const BottomBar = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<string | null | undefined>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [recording, setRecording] = useState('')

  const recorder = useMemo(
    () =>
      new Recorder({
        wasmURL: '/vmsg.wasm',
      }),
    []
  )

  const startStopRecording = async () => {
    setIsLoading(true)
    if (isRecording) {
      const blob = await recorder.stopRecording()
      setIsLoading(false)
      setIsRecording(false)
      setRecording(URL.createObjectURL(blob))
      setModalOpen(true)
    } else {
      try {
        await recorder.initAudio()
        await recorder.initWorker()
        recorder.startRecording()
        setIsLoading(false)
        setIsRecording(true)
      } catch (e) {
        console.error(e)
        setIsError((e as object).toString() ?? 'Unknown error')
        setIsLoading(false)
      }
    }
  }
  return (
    <>
      <ErrorModal error={isError} handleClose={() => setIsError(null)} />
      <RecordingModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        downloadUrl={recording}
      />
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        position={'fixed'}
        zIndex={1000}
        p={'12px 0'}
        bottom={0}
        boxShadow={24}
        bgcolor={'background.default'}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={startStopRecording}
          disabled={isLoading}
        >
          {isRecording ? 'Stop' : 'Record'}
        </Button>
      </Grid>
    </>
  )
}
