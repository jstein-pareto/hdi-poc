import React, { FC } from 'react';
import { Button } from '@paretointel/react-component-library';

import './App.css';

export const App: FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="/">login</a></li>
            <li><a href="/dashboard">dashboard</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ullam eveniet sit itaque asperiores, voluptates eos nemo ad, vero optio ipsum at ut mollitia fugit provident autem in adipisci. Consequatur!</p>
          <Button display="BUTTON" onClick={() => alert('click')} />
        </section>
      </main>
      <footer className="App-footer">
        &copy;
        {JSON.stringify(year)}
      </footer>
    </div>
  );
};

export default App;
