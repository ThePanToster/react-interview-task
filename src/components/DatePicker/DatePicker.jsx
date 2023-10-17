import { Box, TextField, InputLabel } from '@mui/material'

const DatePicker = () => (
    <Box>
        <InputLabel>Data urodzenia</InputLabel>
        <TextField name="birthdate" type="date" />
    </Box>
)

export default DatePicker
