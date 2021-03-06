import React, {PropTypes} from 'react';
import Card from './Card';

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card key={card.id} {...card}/>)}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired
};

export default CardList;
