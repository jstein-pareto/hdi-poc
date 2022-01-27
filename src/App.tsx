import {FC} from 'react';
import {Button} from '@paretointel/react-component-library';

import './App.css';

export const App:FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href='/'>login</a></li>
            <li><a href='/dashboard'>dashboard</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <aside>aside</aside>
        <section>section

        <Button display='BUTTON' onClick={()=>alert('click')} />
        </section>
      </main>
      <footer className="App-footer">&copy;{JSON.stringify(year)}</footer>
    </div>
  );
}

export default App;
