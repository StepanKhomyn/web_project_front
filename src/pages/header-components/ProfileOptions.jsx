import React from "react";
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
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MailOutlineIcon from "@mui/icons-material/MailOutline";


const ProfileOptions = ({isLoggedIn, onLogout}) => {
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






// <div>

// <Box sx={{ display: { xs: "none", md: "flex" } }}>
// <Link to="/messages">
//   <IconButton
//     size="large"
//     aria-label="show 4 new mails"
//     color="white"
//   >
//     <Badge badgeContent={4} color="error">
//       {/* <MailIcon style={{ filter: "invert(100)"}} /> */}
//       <MailOutlineIcon
//         style={{ filter: "invert(100)", fill: "black" }}
//       />
//     </Badge>
//   </IconButton>
// </Link>
// <Link to="/favourites" style={{ color: "white" }}>
//   <IconButton
//     size="large"
//     aria-label="show 17 new notifications"
//     color="inherit"
//   >
//     <Badge badgeContent={17} color="error">
//       <FavoriteBorderIcon />
//     </Badge>
//   </IconButton>
// </Link>
// <IconButton
//   size="large"
//   edge="end"
//   aria-label="account of current user"
//   aria-controls={menuId}
//   aria-haspopup="true"
//   onClick={handleProfileMenuOpen}
//   color="inherit"
// >
//   <AccountCircle />
// </IconButton>
// </Box>
// <Box sx={{ display: { xs: "flex", md: "none" } }}>
// <IconButton
//   size="large"
//   aria-label="show more"
//   aria-controls={mobileMenuId}
//   aria-haspopup="true"
//   onClick={handleMobileMenuOpen}
//   color="inherit"
// >
//   <MoreVertIcon />
// </IconButton>
// </Box>
// </div>
    );

    return (
        <div>
          {renderMenu}
          {renderMobileMenu}
          {/* Rest of your JSX content */}
        </div>
      );
}

export default ProfileOptions;