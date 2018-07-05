import React from 'react';

class App extends React.Component{
  render() {
    return(
      <div>
        Starting...
        <CardList cards={data}/>
      </div>
    );
  }
}

export default App;

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

let data = [
  {
    name: "Paul O’Shannessy",
    avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
    company: "Facebook"
  } , {
    name: "Ben Alpert",
    avatar_url: "https://avatars0.githubusercontent.com/u/7585659?v=4",
    company: "Facebook"
  }
];

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card}/>)}
    </div>
  );
};
