import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Profileer from './components/Profileer';
import Namer from './components/Namer';
import Propsconcept from './components/Propsconcept';
import Conditions from './components/Conditions';



function App() {
  return (
    <>

    <namer/>
    

    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>

    <Profile/>
    
    <Profileer/>

    <Namer/>

    <Propsconcept name={'siddharth'} age={34} rollNumber={123456789} />

    <Conditions name={'tomato'} isPacked={true} />
    <Conditions name={'tomato'} isPacked={false} />
    <Conditions name={'tomato'} isPacked={true} />
    

    

    </>
  );
}

export default App;
