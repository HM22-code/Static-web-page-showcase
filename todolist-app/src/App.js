import './App.css';
import BoxContainer from './components/BoxContainer/BoxContainer';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
        <TopBar></TopBar>
        <SideBar></SideBar>
        <BoxContainer></BoxContainer>
    </div>
  );
}

export default App;
