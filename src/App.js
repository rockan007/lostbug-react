import img from './assets/images/fire-cloud.webp';
import './App.css';

function App() {
  return (
    <div className="App content-img"  style={{backgroundImage:`url(${img})`}}>
        <p>"The meaning of life lies in the courage to bear the meaninglessness of life."</p>
        <p>“You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.”</p>
        <p>--Albert Camus</p>
    </div>
  );
}

export default App;
