import Header from './components/header/Header'
import Welcome from './components/wellcome/Welcome'
import Benefit from './components/benefit/Benefit'
import RoadMap from './components/road-map/RoadMap'
import Companies from './components/companies/Companies'
import Network from './components/network/Network'
import Wallets from './components/wallets/Wallets';
import Team from './components/team/Team';
import Charts from './components/charts/Charts';
import Miner from './components/miner/Miner';
import Events from './components/events/Events';
import Donate from './components/donate/Donate';
import Footer from './components/footer/Footer';
import Mask from './assets/Mask.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome
        image="/assets/welcome.png"
        imageName="People welcome"
      />
      <Benefit/>
      <Welcome image={Mask} classes="reverse"/>
      <RoadMap/>
      <Companies/>
      <Network/>
      <Wallets/>
      <Team/>
      <Charts/>
      <Miner/>
      <Events/>
      <Donate/>
      <Footer/>
    </div>
  );
}

export default App
