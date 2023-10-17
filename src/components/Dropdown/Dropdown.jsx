import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
} from '@mui/material'

import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Dropdown = ({ invalid }) => {
    const [continent, setContinent] = useState('')
    return (
        <FormControl fullWidth>
            <InputLabel id="continent-dropdown-label">Kontynent</InputLabel>
            <Select
                label="Kontynent"
                name="continent"
                error={invalid}
                value={continent}
                onChange={(e) => setContinent(e.target.value)}
            >
                <MenuItem value={'africa'}>Afryka</MenuItem>
                <MenuItem value={'north-america'}>Ameryka Północna</MenuItem>
                <MenuItem value={'south-america'}>Ameryka Południowa</MenuItem>
                <MenuItem value={'antarctica'}>Antarktyda</MenuItem>
                <MenuItem value={'australia'}>Australia</MenuItem>
                <MenuItem value={'asia'}>Azja</MenuItem>
                <MenuItem value={'europe'}>Europa</MenuItem>
            </Select>
            <FormHelperText error sx={{ display: invalid ? 'block' : 'none' }}>
                Niespełnione kryteria
            </FormHelperText>
        </FormControl>
    )
}

export default Dropdown
