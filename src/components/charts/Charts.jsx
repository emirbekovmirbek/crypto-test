import React from 'react'
import './charts.scss'
import TitleDesc from '../title-desc/TitleDesc';

const Charts = () => {
  return (
    <div className="charts container-sm">
      <TitleDesc text="08. CHARTS" title="Lymcoin Charts"/>
      <div className="charts__graphs">
        <div className="charts__graph">
          <div className="charts__graph-texts">
            <p>Current Price</p>
            <span>$541.27</span>
          </div>
          <div className="charts__graph-image">
            <img src="/assets/graph.svg" alt="Graph"/>
          </div>
        </div>
        <div className="charts__graph">
          <div className="charts__graph-texts">
            <p>Current Price</p>
            <span>$541.27</span>
          </div>
          <div className="charts__graph-image">
            <img src="/assets/graph.svg" alt="Graph"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts;