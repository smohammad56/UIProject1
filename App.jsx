/*import Message from './Message';

function App(){
  return <div><Message> </Message></div>;
}

export default App; */

import BootstrapTabs from "./components/BootstrapTabs";
import Clock from "./components/Clock";
import './App.css';
import "./index.css";


function App() {
  return (
    <div className="App">
      <BootstrapTabs />
    </div>
  );
}


export default App;