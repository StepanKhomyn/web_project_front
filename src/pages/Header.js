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
        <AppBar  position="static" style={{ backgroundColor: '#222831' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: '#EEEEEE', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <AgricultureIcon
                            style={{ marginRight: 16, fontSize: 30, color: '#EEEEEE' }}
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
                    <div>
                        <Link to="/login" style={{ textDecoration: 'none', color: '#EEEEEE'  }}>
                            <Button color="inherit" startIcon={<ExitToAppIcon />}>
                                Login
                            </Button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: 'none', color: '#EEEEEE' }}>
                            <Button color="inherit" startIcon={<ExitToAppIcon />}>
                                Sign up
                            </Button>
                        </Link>
                    </div>
                    
                    
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
