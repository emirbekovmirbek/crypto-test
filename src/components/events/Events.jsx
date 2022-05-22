import React from 'react'
import TitleDesc from '../title-desc/TitleDesc'
import EventCard from './card/EventCard'
import './events.scss'

const Events = () => {
  const cardsList = [
    {
      'num': 16,
      'date':'April 2019',
      'name': 'Ethyl Voting',
      'desc': '“The Ethyl Community Fund Proposal has started their voting.”'
    },
    {
      'num': 30,
      'date':'May 2019',
      'name': 'Chainges Conference',
      'desc': 'Join the first world-class quality blockchain and cryptocurrency conference'
    },
    {
      'num': 10,
      'date':'June 2019',
      'name': 'Ethyl Voting',
      'desc': 'Catapult Lymcoin (version 2.0) will come sometime this year'
    }
  ]
  return (
    <div className="events container-sm">
      <TitleDesc text="10. EVENTS" title="Upcoming Events"/>
      <div className="events__cards">
        {cardsList.map((item, idx) => <EventCard card={item} key={idx}/>)}
      </div>
    </div>
  )
}

export default Events