import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { logo } from '../utils/constants.jsx'
import { SpaceBar } from '@mui/icons-material';

const Navbar = () => {
    return (
        <stck direction="row" alignItems="center" p={2} sx={{possition: 'sticky', background:'#000', top:0, justifyContent:'Space-between'}}>
        <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height={45} />
        </Link>
        </stck>
    )
}

export default Navbar
