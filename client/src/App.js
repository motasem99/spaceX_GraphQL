import './App.css';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Logo from './logoSpaceX.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={Logo}
          alt='SpaceX'
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
