import { Stack, TextField } from '@mui/material'

const NameInputs = () => (
    <Stack direction={'row'} gap={2}>
        <TextField
            //error
            id="first-name-input"
            label="Imię"
            //defaultValue="Imię"
            //helperText="To pole jest wymagane"
            required
        />
        <TextField
            //error
            id="last-name-input"
            label="Nazwisko"
            //defaultValue="Imię"
            //helperText="To pole jest wymagane"
        />
    </Stack>
)

export default NameInputs
