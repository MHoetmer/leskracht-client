import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ArrowDownward from "@material-ui/icons/ArrowDropDown";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import classNames from "classnames";

const drawerWidth = 240;

const stylesT = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

const styles = {
  arrow: {
    marginTop: "6px"
  },
  root: {
    flexGrow: 10
  },
  grow: {
    flexGrow: 10
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuItem: {
    fontSize: 16,
    fontFamily: "Dosis",
    textTransform: "inherit",
    textDecorationLine: "none",
    color: "#ffffff",
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    }
  },
  subMenuItem: {
    fontFamily: "Dosis",
    textTransform: "inherit",
    textDecorationLine: "none",
    color: "#00000",
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    }
  }
};

class MenuAppBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
    anchorElOverOns: null,
    products: false,
    overons: false,
    drawer: false
  };

  handleProductsToggle = () => {
    this.setState(state => ({ products: !state.products }));
  };

  handleOverOnsToggle = () => {
    this.setState(state => ({ overons: !state.overons }));
  };
  handleProductsClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ products: false });
  };

  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawer: false });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { auth, anchorEl, drawer } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: drawer
          })}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="center" spacing={32}>
              <Grid key={1} item>
                <Link className={classes.menuItem} to="/">
                  <h3 variant="h6" color="inherit">
                    Home
                  </h3>
                </Link>
              </Grid>
              <Grid key={2} item>
                <Link to="visie" className={classes.menuItem}>
                  <h3 variant="h6" color="inherit">
                    Visie
                  </h3>
                </Link>
              </Grid>
              <Grid key={3} item>
                <Button
                  className={classes.menuItem}
                  buttonRef={node => {
                    this.anchorEl = node;
                  }}
                  aria-owns={this.state.products ? "menu-list-grow" : undefined}
                  onClick={this.handleProductsToggle}
                >
                  <Link to="producten" className={classes.menuItem}>
                    <h3
                      variant="h6"
                      color="inherit"
                      className={classes.menuItem}
                      className={classes.arrow}
                    >
                      Producten
                      <ArrowDownward />
                    </h3>
                  </Link>
                </Button>
                <Popper
                  open={this.state.products}
                  anchorEl={this.anchorEl}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      id="menu-list-grow"
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom"
                      }}
                    >
                      <Paper>
                        <ClickAwayListener
                          className={classes.menuItem}
                          onClickAway={this.handleClose}
                        >
                          <MenuList>
                            <MenuItem
                              onClick={this.handleClose}
                              className={classes.subMenuItem}
                            >
                              Profile
                            </MenuItem>
                            <MenuItem
                              onClick={this.handleClose}
                              className={classes.subMenuItem}
                            >
                              Regenboog wereldkist & Spectrumbox
                            </MenuItem>
                            <MenuItem
                              onClick={this.handleClose}
                              className={classes.subMenuItem}
                            >
                              Meloo
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
              <Grid key={4} item>
                <Link to="producten" className={classes.menuItem}>
                  <h3 variant="h6" color="inherit">
                    Webshop
                  </h3>
                </Link>
              </Grid>
              <Grid key={5} item>
                <Button
                  className={classes.menuItem}
                  buttonRef={node => {
                    this.anchorElOverOns = node;
                  }}
                  aria-owns={this.state.products ? "menu-list-grow" : undefined}
                  onClick={this.handleOverOnsToggle}
                >
                  <Link to="producten" className={classes.menuItem}>
                    <h3
                      variant="h6"
                      color="inherit"
                      className={classes.menuItem}
                      className={classes.arrow}
                    >
                      Over ons
                      <ArrowDownward />
                    </h3>
                  </Link>
                </Button>
                <Popper
                  open={this.state.overons}
                  anchorEl={this.anchorElOverOns}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      id="menu-list-grow"
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom"
                      }}
                    >
                      <Paper>
                        <ClickAwayListener
                          className={classes.menuItem}
                          onClickAway={this.handleClose}
                        >
                          <MenuList>
                            <MenuItem
                              onClick={this.handleClose}
                              className={classes.subMenuItem}
                            >
                              Klantscholen
                            </MenuItem>
                            <MenuItem
                              onClick={this.handleClose}
                              className={classes.subMenuItem}
                            >
                              Team
                            </MenuItem>
                            <MenuItem
                              onClick={this.handleClose}
                              className={classes.subMenuItem}
                            >
                              Pers
                            </MenuItem>
                            <MenuItem
                              onClick={this.handleClose}
                              className={classes.subMenuItem}
                            >
                              Contact
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
            </Grid>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {<ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: drawer
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
