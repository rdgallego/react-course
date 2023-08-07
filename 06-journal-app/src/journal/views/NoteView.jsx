import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "./ImageGallery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)

    const {body, title, date, onInputChange, formState} = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        startUploadingFiles
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
      dispatch(setActiveNote(formState))

    }, [formState])

    useEffect(() => {
        if( messageSaved.length > 0) Swal.fire('Nota actualizada', messageSaved, 'success')

    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        dispatch(startUploadingFiles(target.files))
    }

    const fileInputRef = useRef()

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

  return (
    <Grid container direction="row" justifyContent="space-between" sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>
        <Grid item>
            <input ref={fileInputRef} type="file" multiple onChange={onFileInputChange} style={{display: 'none'}}/>

            <IconButton color="primary" disabled = {isSaving}
            onClick={() => fileInputRef.current.click()}>
                <UploadOutlined/>
            </IconButton>

            <Button onClick={onSaveNote} color="primary" sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField type="text" variant="filled" name="title" value={title} onChange={onInputChange} fullWidth placeholder="Ingree un título" label="Título" sx={{border: 'none', mb:1}}/>
            <TextField type="text" variant="filled" name="body" value={body} onChange={onInputChange} fullWidth multiline placeholder="Que sucedió hoy" minRows={5}/>
        </Grid>

        <Grid container justifyContent="end">
            <Button
            onClick={onDelete}
            sx={{mt: 2}}
            color="error">
                <DeleteOutline/>
                Borrar
            </Button>
        </Grid>

        <ImageGallery images={note.imgUrls}/>
    </Grid>
  )
}
