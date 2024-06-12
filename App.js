import logo from './logo.svg';
import './App.css';
import {PrimerComponente} from './primercomponente';
import { SegundoComponente } from './segundocomponente';
import { TercerComponente } from './tercercomponente';
import { CuartoComponente } from './cuartocomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         <p>Una mente organizada, es una mente feliz. c:</p>

      <CuartoComponente/>    
      <PrimerComponente />
      <SegundoComponente />
      <TercerComponente />

      </header>
    </div>
  );
}

export default App;
