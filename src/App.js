import './App.css';
import backG from './components/imgs/night road.jpg'
import pic from './components/imgs/descarga.jpg'
import Intro from './components/PersonalInfo/Intro'
import Techs from './components/PersonalInfo/Techs'
import Proyects from './components/Proyects/Proyects'
import '../src/components/Proyects/proyects.css'

function App() {
  return (
    <div>
       <div> 
         {/* <img className='backGround' src={backG} alt="nothing"/> */}
         <img className='profilePic' src={pic} alt="nothing"/>
         <p className='welcometext'>Hello there,<br/>
            I'm Justo Becerra<br/>
            Full Stack Developer<br/>
          </p>
          <h3 className='residencetext'>residing in Argentina</h3>
       </div>
       <div>
         <Intro/>
         <Techs/>
         <Proyects/>
       </div>
       {/* <div className='container'>
         <Proyects/>
       </div> */}
    </div>
  );
}

export default App;
