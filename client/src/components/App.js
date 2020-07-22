import React from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        Login:
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </header>
    </div>
  );
}

export default App;
