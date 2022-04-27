import React from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";
import { useEffect } from "react";
function UserContainer({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div>
      <h1>List of users</h1>
      {userData.loading ? (
        <h1>loading...</h1>
      ) : userData.error ? (
        <h4>{userData.error}</h4>
      ) : (
        <div>
          {userData &&
            userData.users &&
            userData.users.map((user, index) => <p key={index}>{user.name}</p>)}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(UserContainer);
