import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const Dropdown = () => (
    <FormControl fullWidth>
        <InputLabel id="continent-dropdown-label">Kontynent</InputLabel>
        <Select
            label="Kontynent"
            id="continent-dropdown"
            //onChange={handleChange}
            //error
            //helperText="Incorrect entry."
        >
            <MenuItem value={'africa'}>Afryka</MenuItem>
            <MenuItem value={'north-america'}>Ameryka Północna</MenuItem>
            <MenuItem value={'south-america'}>Ameryka Południowa</MenuItem>
            <MenuItem value={'antarctica'}>Antarktyda</MenuItem>
            <MenuItem value={'australia'}>Australia</MenuItem>
            <MenuItem value={'asia'}>Azja</MenuItem>
            <MenuItem value={'europe'}>Europa</MenuItem>
        </Select>
        {/* <FormHelperText error>Niespełnione kryteria</FormHelperText> */}
    </FormControl>
)

export default Dropdown
