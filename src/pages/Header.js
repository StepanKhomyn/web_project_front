import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ExitToApp as ExitToAppIcon, } from '@mui/icons-material';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <AgricultureIcon
                            style={{ marginRight: 16, fontSize: 30 }}
                        />
                        Brand cars
                    </Link>
                </Typography>
                {isLoggedIn ? (
                    <Button
                        color="inherit"
                        startIcon={<ExitToAppIcon />} // Login icon
                        onClick={onLogout}
                    >
                        Logout
                    </Button>
                ) : (
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" startIcon={<ExitToAppIcon />}>
                            Login
                        </Button>
                    </Link>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
