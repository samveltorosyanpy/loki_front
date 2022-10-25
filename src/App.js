import './App.css';
import {useEffect} from "react";

function App() {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close()
    }
  return (
    <div className="App">
        <button> onClick={onClose}</button>
    </div>
  );
}

export default App;
