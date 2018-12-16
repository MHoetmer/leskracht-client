import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    fontFamily: "Dosis",
    minWidth: 700
  },
  fab: {
    marginLeft: theme.spacing.unit * 120,
    marginTop: -theme.spacing.unit * 1
  }
});

function createUser(id, firstName, lastName, email, birthDate) {
  return { id, firstName, lastName, email, birthDate };
}

let rows = [];

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      formOpen: false,
      firstName: null,
      lastName: null,
      email: null,
      birthDate: null
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    let users = this.fetchUsers();
    this.setState({ users: users });
  }

  componentDidUpdate(prevProps) {
    console.log("state..", this.state.users);
  }

  deleteUser = id => {
    axios
      .get(
        `http://localhost:8080/graphql?query=mutation{deleteUser(id:${id}){id}}`
      )
      .then(function(response) {
        console.log("response delete", response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    this.forceUpdate();
  };

  addUser = e => {
    const { firstName, lastName, email, birthDate } = this.state;
    console.log("add user", e.target.value);
    console.log("add user:", firstName, lastName, email, birthDate);
    this.handleFormClose();

    axios
      .get(
        `http://localhost:8080/graphql?query=mutation{createUser(firstName:"${firstName}", lastName:"${lastName}", email:"${email}", birthDate:"${birthDate}"){id}}`
      )
      .then(function(response) {
        console.log("response delete", response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    this.forceUpdate();
  };

  fetchUsers = () => {
    axios
      .get(
        "http://localhost:8080/graphql?query={users{id, firstName, lastName, email, birthDate}}"
      )
      .then(function(response) {
        console.log("response", response.data.data.users);
        let users = response.data.data.users;
        let newrows = [];
        let idx = 0;
        users.forEach(key => {
          console.log("foreach", key, idx);
          newrows[idx] = createUser(
            users[idx].id,
            users[idx].firstName,
            users[idx].lastName,
            users[idx].email,
            users[idx].birthDate
          );
          idx = idx + 1;
        });

        rows = newrows;
        console.log("rows", rows);
        this.setState({ users: response.data.data.users });
        return response.data.data.users;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    this.forceUpdate();
  };

  handleFormOpen = () => {
    this.setState({ formOpen: true });
  };

  handleFormClose = () => {
    this.setState({ formOpen: false });
  };

  handleInputFirstChange = ({ target: { name, value } }) => {
    console.log("handleInputFirstChange", name, value);
    this.setState({ firstName: value });
  };
  handleInputLastChange = ({ target: { name, value } }) => {
    console.log("handleInputLastChange", name, value);
    this.setState({ lastName: value });
  };
  handleInputMailChange = ({ target: { name, value } }) => {
    console.log("handleInputMailChange", name, value);
    this.setState({ email: value });
  };
  handleInputDateChange = ({ target: { name, value } }) => {
    console.log("handleInputDateChange", name, value);
    this.setState({ birthDate: value });
  };

  render() {
    console.log("state", this.state.users);
    const { classes } = this.props;
    return (
      <div>
        <MenuAppBar
          content={
            <div>
              <Tooltip title="Add">
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="Add"
                  className={classes.fab}
                  onClick={this.handleFormOpen}
                >
                  <AddIcon />
                </Button>
              </Tooltip>
              <Dialog
                open={this.state.formOpen}
                onClose={this.handleFormClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">User aanmaken</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Voeg een gebruiker toe aan de PostGres database
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="FirstName"
                    type="firstName"
                    fullWidth
                    onChange={e => this.handleInputFirstChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="LastName"
                    type="lastName"
                    fullWidth
                    onChange={e => this.handleInputLastChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={e => this.handleInputMailChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="BirthDate"
                    type="date"
                    fullWidth
                    onChange={e => this.handleInputDateChange(e)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleFormClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={e => this.addUser(e)} color="primary">
                    Toevoegen
                  </Button>
                </DialogActions>
              </Dialog>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell numeric>Id</TableCell>
                      <TableCell>First name</TableCell>
                      <TableCell>Last name</TableCell>
                      <TableCell>E-mail adress</TableCell>
                      <TableCell numeric>Date of Birth</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => {
                      return (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row" numeric>
                            {row.id}
                          </TableCell>
                          <TableCell>{row.firstName}</TableCell>
                          <TableCell>{row.lastName}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell numeric>{row.birthDate}</TableCell>
                          <TableCell>
                            <Tooltip title="Delete">
                              <IconButton
                                onClick={() => this.deleteUser(row.id)}
                                aria-label="Delete"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Users);
