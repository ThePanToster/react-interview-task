import { Container, Stack, ThemeProvider, createTheme } from '@mui/material'
import { Dropdown, NameInputs, DatePicker, Submit, Form } from './components'
import { useState } from 'react'

const App = () => {
    const [isDropdownInvalid, setIsDropdownInvalid] = useState(false)
    const [isDateInvalid, setIsDateInvalid] = useState(false)
    const [isUserElderly, setIsUserElderly] = useState(false)
    const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false)

    const theme = createTheme({
        typography: {
            fontSize: isUserElderly ? 28 : 14,
        },
    })

    function submitHandle(e) {
        e.preventDefault()
        const data = {
            continent: e.target.elements.continent.value,
            birthDate: e.target.elements.birthdate.value,
            firstName: e.target.elements.firstname.value,
            lastName: e.target.elements.lastname.value,
        }

        if (data.firstName === '') {
            setIsFirstNameEmpty(true)
            return
        } else setIsFirstNameEmpty(false)

        const birthDate = Date.parse(data.birthDate)

        if (data.continent === 'europe' && data.lastName.length < 2) {
            setIsDropdownInvalid(true)
            return
        } else setIsDropdownInvalid(false)

        if (birthDate > Date.now()) {
            setIsDateInvalid(true)
            return
        }

        const currentYear = new Date().getFullYear()
        const userYear = new Date(birthDate).getFullYear()

        if (currentYear - userYear > 60) setIsUserElderly(true)
        else setIsUserElderly(false)

        alert('sukces')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ marginTop: 20 }}>
                <Form
                    submitHandle={submitHandle}
                    sx={{ fontSize: isUserElderly ? 'medium' : 'large' }}
                >
                    <Stack py={5} px={22} spacing={2} alignItems={'center'}>
                        <Dropdown invalid={isDropdownInvalid} />
                        <NameInputs isEmpty={isFirstNameEmpty} />
                        <DatePicker />
                        <Submit disabled={isDateInvalid} />
                    </Stack>
                </Form>
            </Container>
        </ThemeProvider>
    )
}

export default App
