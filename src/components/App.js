import React from 'react';
import CardList from './CardList';
import Form from './Form';
import Data from './Constants/mockData';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { cards: Data };
    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard(cardInfo) {
    this.setState((prevState) => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  render() {
    return(
      <div>
        <h1> Use this tool to get Github user info </h1>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;

