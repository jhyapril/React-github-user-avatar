import React, { PropTypes } from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Event: Form Submit', ${this.state.userName}`);
    // axios.get()
  }

  handleChange(value) {
    this.setState({
      userName: value
    })
  }



  render() {
    return (
      <form>
        <input type="text"
               value={this.state.userName}
               onChange={(event) => this.handleChange(event.target.value)}
               placeholder="Github username, eg. jhyapril"
               style={{width: '10rem'}}
               required/>
        <button type="submit" onClick={(event) => this.handleSubmit(event)}>Add card</button>
      </form>
    );
  }
}



// Form.propTypes = {
//
// };

export default Form;
