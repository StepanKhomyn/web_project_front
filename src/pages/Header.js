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
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={onLogout} color="inherit">
        Logout
        <ExitToAppIcon />
      </MenuItem>
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

          <p>Messages</p>
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

          <p>Favourites</p>
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
        <p>Profile</p>
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
                      {/* <MailIcon style={{ filter: "invert(100)"}} /> */}
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
                  Login
                </Button>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#EEEEEE" }}
              >
                <Button color="inherit" startIcon={<ExitToAppIcon />}>
                  Sign up
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
