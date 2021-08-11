import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from './logoSpaceX.png';
import Launches from './components/Launches/Launches.jsx';
import Launch from './components/Launch/Launch.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <img
            src={Logo}
            alt='SpaceX'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
