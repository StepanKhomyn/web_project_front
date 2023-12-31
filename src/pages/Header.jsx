import { AppBar, Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./cars-list/CarsList.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateIsAuth, updateSearchTerm } from '../store/reducers/FilterSlice';
import { AccountCircle, AccountCircleOutlined } from '@mui/icons-material';

const Header = () => {
  
  const { searchTerm, email } = useSelector((state) => state.FilterReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Додайте код для виходу, наприклад, вивільнення токену або скидання інших даних авторизації
    // Приклад:
     localStorage.removeItem('token');
    // або використовуйте функції для очищення стану аутентифікації в Redux
    // dispatch(logoutAction());
    window.localStorage.removeItem('isAuth');
    // Після виходу перенаправте користувача на сторінку входу або іншу відповідну сторінку
    dispatch(updateIsAuth(false))
    navigate('/login');
    
    // Закрийте меню
    handleClose();
  };

  return (
    <div className="navbar">
        <input
          placeholder="Search"
          className="search-input"
          onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
          value={searchTerm}
        />
      {/*<div className="sell-container">
        <Link to="/sell">
          <button className="sell-button">Sell a car</button>
        </Link>
         </div>*/}
      <div className="navbar-menu">
        <div className="navbar-icon">
          <Link className="navbar-star" to="/favourites">
            <IconButton>
              <StarBorderIcon />
            </IconButton>
          </Link>
          <Link to="/messages">
            <IconButton>
              <MessageIcon />
            </IconButton>
          </Link>
          <Link to="/messages">
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Link>
        </div>
        {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{width: "40px", height: "40px", borderRadius: "50%", color: "grey"}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile {email}</MenuItem>
                <MenuItem onClick={handleLogout}>Вихід</MenuItem>
              </Menu>
            </div>
        )}
      </div>
    </div>
  )
}

export default Header











/*import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ExitToApp as ExitToAppIcon } from "@mui/icons-material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Header = ({ isLoggedIn, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
        <MenuItem onClick={handleMenuClose}>Профіль</MenuItem>
      </Link>
      <Link to="/" style={{ color: "inherit", textDecoration: "none"}}>
      <MenuItem onClick={onLogout} color="inherit">
        Вийти з аккаунту
        <ExitToAppIcon />
      </MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/messages" style={{ color: "black", textDecoration: "none"}}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailOutlineIcon style={{ fill: "black" }} />
            </Badge>
          </IconButton>

          <p>Повідомлення</p>
        </MenuItem>
      </Link>
      <Link to="/favourites" style={{ color: "black", textDecoration: "none"}}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <FavoriteBorderIcon style={{ fill: "black" }} />
            </Badge>
          </IconButton>

          <p>Вибрані</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Профіль</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "#222831" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                color: "#EEEEEE",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AgricultureIcon
                style={{ marginRight: 16, fontSize: 30, color: "#EEEEEE" }}
              />
              Brand cars
            </Link>
          </Typography>
          {isLoggedIn ? (
            <div>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link to="/messages">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="white"
                  >
                    <Badge badgeContent={4} color="error">
                      <MailOutlineIcon
                        style={{ filter: "invert(100)", fill: "black" }}
                      />
                    </Badge>
                  </IconButton>
                </Link>
                <Link to="/favourites" style={{ color: "white" }}>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <FavoriteBorderIcon />
                    </Badge>
                  </IconButton>
                </Link>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#EEEEEE" }}
              >
                <Button color="inherit" startIcon={<ExitToAppIcon />}>
                  Увійти
                </Button>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#EEEEEE" }}
              >
                <Button color="inherit" startIcon={<ExitToAppIcon />}>
                  Зареєструватися
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
*/