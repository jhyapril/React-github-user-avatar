import React, {PropTypes} from 'react';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
        <div>Joined at: {props.created_at.substring(0, 10)}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  created_at: PropTypes.string
};

export default Card;
