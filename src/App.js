import './App.css';
import backG from './components/imgs/night road.jpg'
import pic from './components/imgs/yo.jpg'
import Intro from './components/PersonalInfo/Intro'
import Techs from './components/PersonalInfo/Techs'

function App() {
  return (
    <div>
       <div> 
         {/* <img className='backGround' src={backG} alt="nothing"/> */}
         <img className='profilePic' src={pic} alt="nothing"/>
       </div>
       <div>
         <Intro/>
         <Techs/>
       </div>
    </div>
  );
}

export default App;
