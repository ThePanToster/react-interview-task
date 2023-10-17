import { Stack, TextField } from '@mui/material'

// eslint-disable-next-line react/prop-types
const NameInputs = ({ isEmpty }) => (
    <Stack direction={'row'} gap={2}>
        <TextField
            error={isEmpty}
            name="firstname"
            label="Imię"
            helperText={isEmpty ? 'To pole jest wymagane' : ''}
            required
        />
        <TextField name="lastname" label="Nazwisko" />
    </Stack>
)

export default NameInputs
