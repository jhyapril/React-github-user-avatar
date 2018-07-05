import React from 'react';
import CardList from './CardList';
import Form from './Form';
import Data from './Constants/mockData';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { cards: Data };
  }


  render() {
    return(
      <div>
        <Form />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;

