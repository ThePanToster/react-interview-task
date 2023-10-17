import { Paper, Container } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Form = ({ children }) => (
    <Paper component="form" elevation={8} sx={{ marginX: 20 }}>
        <Container>{children}</Container>
    </Paper>
)

export default Form
