import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardContent,
         Select, MenuItem, Button, CardActions, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { setAuthUser } from '../actions/authUser';

const useStyles = makeStyles({
  root: {
    width: '50%'
  },
  containerBox: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeader: {
    textAlign: 'center'
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
  }
});

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthUser: (authUser) => dispatch(setAuthUser(authUser)),
})

const Login = ({ users, setAuthUser }) => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState(Object.keys(users)[0]);

  const handleChangeSelectedUser = useCallback((e) => {
    e.preventDefault();

    setSelectedUser(e.target.value);
  }, [setSelectedUser]);

  const handleSetAuthUser = useCallback((e) => {
    e.preventDefault();

    setAuthUser(selectedUser);
  }, [selectedUser, setAuthUser]);

  return (
    <Box className={classes.containerBox} display="flex">
      <Card className={classes.root}>
        <CardHeader className={classes.cardHeader} title='Login' subheader='Select your user.' />
        <CardContent>
          <Select
            className={classes.input}
            value={selectedUser}
            onChange={handleChangeSelectedUser}
          >
            {
              Object.keys(users).map((userId) => {
                const user = users[userId];
                return <MenuItem key={userId} value={userId}>{user.name}</MenuItem>
              })
            }
          </Select>
        </CardContent>
        <CardActions>
          <Button onClick={handleSetAuthUser} className={classes.button} variant="contained" color="primary">Select</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);