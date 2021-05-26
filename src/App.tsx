import React, { Suspense } from 'react';
import './App.css';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from './environment';
import { Link } from 'found';

const App: React.FC = ({ children }) => {
  return <RelayEnvironmentProvider environment={environment}>
    <Link to="/list">List 1</Link>
    <span> | </span>
    <Link to="/productlist">List 2</Link>

    <div>
      <Suspense fallback="Loading...">
        {children}
      </Suspense>
    </div>

  </RelayEnvironmentProvider>
};

export default App;
