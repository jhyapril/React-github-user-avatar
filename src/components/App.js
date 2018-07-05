import React from 'react';

class App extends React.Component{
  render() {
    return(
      <div>
        Starting...
        <Card />
      </div>
    );
  }
};

const Card = (props) => {
  return (
    <div>
      <img src="http://placehold.it/75"/>
      <div>
        <div>Name here...</div>
        <div>Company Name here ...</div>
      </div>
    </div>
  );
};

export default App;
