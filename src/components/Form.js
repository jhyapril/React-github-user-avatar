import React, { PropTypes } from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
    }).catch(error => {
        alert(`Username '${this.state.userName}' is not found.`);
        this.setState({userName: ''});
        throw(error);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.userName}
               onChange={(event) => this.setState({userName: event.target.value})}
               placeholder="Github username, eg. jhyapril"
               style={{width: '10rem'}}
               required/>
        <button type="submit">Search</button>
      </form>
    );
  }
}



Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
