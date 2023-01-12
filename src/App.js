// import logo from './logo.svg';
import './App.css';
import SimpleCounterComponent from './component/SimpleFunction';
import PureCounterComponent from './component/PureFunction';
function App() {
  return (
    <div className="App">
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </div>
  );
}

export default App;
