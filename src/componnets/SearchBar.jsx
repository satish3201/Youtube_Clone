import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Paper component="form" onSubmit={() => { }} sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, width: '300 px', boxShadow: 'none', mr: { sm: 5 } }}>
            <input className='search-bar' placeholder='Serach...' value="" onChange={() => { }} />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
