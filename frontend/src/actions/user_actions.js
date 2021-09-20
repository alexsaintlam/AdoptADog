import * as UserApil from '../util/user_util'
import { getUser, getUsers, updateUser } from '../util/user_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});


export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUsers = () => dispatch => (
    getUsers()
      .then(users => dispatch(receiveUsers(users)))
  );

export const fetchUser = userId => dispatch => (
    getUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
    UserApil.updateUser(user)
    .then(user=> dispatch(receiveUser(user)))
    .catch(err => console.log(err))

)