import { Paper, Container } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Form = ({ children, submitHandle }) => (
    <Paper elevation={8} sx={{ marginX: 20 }}>
        <Container component="form" onSubmit={submitHandle} noValidate>
            {children}
        </Container>
    </Paper>
)

export default Form
