import React from 'react';
import './event-card.scss'
import Button from '../../button/Button';

const EventCard = ({card}) => {
  return (
    <div className="event-card">
      <p className="event-card__num">
        {card.num}
      </p>
      <p className="event-card__num event-card__num--sm">
        {card.date}
      </p>
      <p className="event-card__name">
        {card.name}
      </p>
      <p className="event-card__desc">{
        card.desc
      }</p>
      <Button text="Read more" schema="white"/>
    </div>
  );
};

export default EventCard;