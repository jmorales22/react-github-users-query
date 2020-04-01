import React, {Component} from 'react';
import './App.css';
import UserCardList from './components/UserCardList'

class App extends Component {
  state = {
    value: "",
    users: []
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const user_name = this.state.value;
    const response = await fetch(`https://api.github.com/users/${user_name}`);
    const data = await response.json();
    console.log("this is the data", data)
    this.setState({
      value: '',
      users: [...this.state.users, data]
    });
  };

  render() {
    const { value, users } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter User Name Here:
            <input
              type="text"
              value={ value }
              placeholder="Text Input"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          <UserCardList users={users}/>
  
        </div>
      </div>
    );
  }
}

export default App;

