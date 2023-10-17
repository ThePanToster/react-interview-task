import { Box, TextField, InputLabel } from '@mui/material'

const DatePicker = () => (
    <Box>
        <InputLabel id="date-input-label">Data urodzenia</InputLabel>
        <TextField
            //error
            id="date-input"
            labelId="date-input-label"
            //label="Data urodzenia"
            type="date"
            //defaultValue="Imię"
            //helperText="To pole jest wymagane"
        />
    </Box>
)

export default DatePicker
