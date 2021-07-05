import ListaComponent from './components/lista';
import Seletor from './components/seletor';
import { useSelector } from "react-redux"
import preval from 'preval.macro'
function App() {
  const result = useSelector(state => state.Seletor)
  return (
    <div className={`${result['tc']} ${result['bg']}`} style={{width:"100%"}} >
      <div className="container">
        <div className="mt-5" >
          <h3>
            Lista de coisas à fazer
          </h3>
          <Seletor></Seletor>
          <ListaComponent></ListaComponent>
        </div>
        <p className="mt-5">
            Data de build: {preval`module.exports = new Date().toLocaleString();`} (GMT+0).
          </p>
      </div>
      
    </div>
  );
}

export default App;
