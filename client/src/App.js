import './App.css';
import Logo from './logoSpaceX.png';

function App() {
  return (
    <div className='App'>
      <img
        src={Logo}
        alt='SpaceX'
        style={{ width: 300, display: 'block', margin: 'auto' }}
      />
    </div>
  );
}

export default App;
