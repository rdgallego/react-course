import { TurnedInNot } from "@mui/icons-material"
import {  Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"

export const SideBarItem = ({note}) => {
    const dispatch = useDispatch()
    const activateNote = () => {
        dispatch(setActiveNote(note))
    }
  return (
    <ListItem disablePadding >
        <ListItemButton onClick={activateNote}>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={note.title} />
                <ListItemText secondary={note.body} />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
