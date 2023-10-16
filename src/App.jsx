import {
    Box,
    Paper,
    Button,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Stack,
    //FormHelperText,
} from '@mui/material'

function App() {
    return (
        <Container sx={{ marginTop: 20 }}>
            <Paper component="form" elevation={8} sx={{ marginX: 20 }}>
                <Container>
                    <Stack py={5} px={22} spacing={2} alignItems={'center'}>
                        <FormControl fullWidth>
                            <InputLabel id="continent-dropdown-label">
                                Kontynent
                            </InputLabel>
                            <Select
                                label="Kontynent"
                                id="continent-dropdown"
                                //onChange={handleChange}
                                //error
                                //helperText="Incorrect entry."
                            >
                                <MenuItem value={'africa'}>Afryka</MenuItem>
                                <MenuItem value={'north-america'}>
                                    Ameryka Północna
                                </MenuItem>
                                <MenuItem value={'south-america'}>
                                    Ameryka Południowa
                                </MenuItem>
                                <MenuItem value={'antarctica'}>
                                    Antarktyda
                                </MenuItem>
                                <MenuItem value={'australia'}>
                                    Australia
                                </MenuItem>
                                <MenuItem value={'asia'}>Azja</MenuItem>
                                <MenuItem value={'europe'}>Europa</MenuItem>
                            </Select>
                            {/* <FormHelperText error>Niespełnione kryteria</FormHelperText> */}
                        </FormControl>

                        <Stack direction={'row'} gap={2}>
                            <TextField
                                //error
                                id="name-input"
                                label="Imię"
                                //defaultValue="Imię"
                                //helperText="To pole jest wymagane"
                                required
                            />
                            <TextField
                                //error
                                id="surname-input"
                                label="Nazwisko"
                                //defaultValue="Imię"
                                //helperText="To pole jest wymagane"
                            />
                        </Stack>

                        <Box>
                            <InputLabel id="date-input-label">
                                Data urodzenia
                            </InputLabel>
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

                        <Button component="submit" variant="contained" disabled>
                            Wyślij
                        </Button>
                    </Stack>
                </Container>
            </Paper>
        </Container>
    )
}

export default App
