import React from 'react'
import './team.scss'
import TitleDesc from '../title-desc/TitleDesc';
import SimpleSlider from '../slider/Slider';
import Advisor from './advisor/Advisor';

const advisors = [
  {
    'id': 1,
    'avatar': '/assets/advisor.svg',
    'name': 'John Nelson',
    'position': 'Account Manager'
  },
  {
    'id': 2,
    'avatar': '/assets/advisor2.svg',
    'name': 'John Nelson',
    'position': 'Account Manager'
  },
  {
    'id': 3,
    'avatar': '/assets/advisor3.svg',
    'name': 'John Nelson',
    'position': 'Account Manager'
  },
  {
    'id': 4,
    'avatar': '/assets/advisor.svg',
    'name': 'John Nelson',
    'position': 'Account Manager'
  },
]
const Team = () => {
  return (
    <div className="team container-sm">
      <div className="team__content">
        <TitleDesc
          text="07. TEAM"
          title="Team & Advisors"
          desc="With a team of top technology and finance professionals, the nonprofit
        Lymcoin expands access to low-cost financial services to fight poverty and maximize individual potential."
        />
      </div>

      <div className="team__slider container-sm">
        <SimpleSlider>
          {advisors.map(item => <Advisor advisor={item} key={item.id}/>)}
        </SimpleSlider>
      </div>
    </div>
  )
}
export default Team