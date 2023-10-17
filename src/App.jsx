import {
    Container,
    Stack,
    //FormHelperText,
} from '@mui/material'

import { Dropdown, NameInputs, DatePicker, Submit, Form } from './components'

function App() {
    return (
        <Container sx={{ marginTop: 20 }}>
            <Form>
                <Stack py={5} px={22} spacing={2} alignItems={'center'}>
                    <Dropdown />
                    <NameInputs />
                    <DatePicker />
                    <Submit />
                </Stack>
            </Form>
        </Container>
    )
}

export default App
