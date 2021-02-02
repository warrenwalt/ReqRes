// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import Users from './components/users';
import DeleteUser from './components/deleteUser';
import GetUser from './components/getuser';
import Navbar from './components/navbar';
import PostUser from './components/postUser';
import UpdateUser from './components/updateUser';


class App extends Component {
  state = {
    users: [
      { username: 'warren', email: 'war@email.com', job: "pop", occ: 'drug dealer', id: 1 },
      { username: 'lionel', email: 'joel@email.com', job: "director", occ: 'enterprenuer', id: 2 },
      { username: 'ronaldo', email: 'christene@email.com', job: "president", occ: 'creator', id: 3 },
      { username: 'merryl', email: 'susan@email.com', job: "developer", occ: 'coder', id: 4 },
    ],
    loading: true,
    requests: {
      get: { users: {}, user: {}, resources: {}, resource: {} },
      post: {}, delete: 0, update: 0
    },
    getuser: {},
  }

  async componentDidMount() {
    const url = "https://reqres.in/api/users";
    const get_data = await fetch(url);
    const user = await get_data.json();
    this.setState({ users: user.data });
    console.log("Real user...", this.state.users);
  }

  submitGetHandler = event => {
    event.preventDefault();
    const user_id = document.getElementById("ID").value;
    // this.getUser(user_id);
    this.setState({ getuser: this.state.users.filter(u => u.id == user_id)[0] });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Users
          users={this.state.users} />
        <GetUser
          submitGetHandler={this.submitGetHandler}
          getuser={this.state.getuser}
        />
      </React.Fragment>
    );
  }
}

export default App;