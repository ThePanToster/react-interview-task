import { Button } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Submit = ({ disabled }) => (
    <Button type="submit" variant="contained" disabled={disabled}>
        Wyślij
    </Button>
)

export default Submit
