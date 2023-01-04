import './App.css';
import { Contato } from './components/Contato';
import { Header } from './components/Header';
import { MeusProjetos } from './components/Meus Projetos';
import { MinhasHabilidades } from './components/Minhas habilidades';
import { SobreMim } from './components/sobre mim';

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <SobreMim/>
        <MinhasHabilidades/>
        <MeusProjetos/>
        <Contato/>
      </div>
    </>
  );
}

export default App;
