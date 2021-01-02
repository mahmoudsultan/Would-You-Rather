import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';
import { Card, CardHeader, CardContent, Select, MenuItem, Button, CardActions } from '@material-ui/core';

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthUser: (authUser) => dispatch(setAuthUser(authUser)),
})

const Login = ({ users, setAuthUser }) => {
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
    <Card>
      <CardHeader title='Login' subheader='Select your user.' />
      <CardContent>
        <Select
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
        <Button onClick={handleSetAuthUser} variant="contained" color="primary">Select</Button>
      </CardActions>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);