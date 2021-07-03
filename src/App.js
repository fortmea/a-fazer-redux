import ListaComponent from './components/lista';
import Seletor from './components/seletor';
import { useSelector } from "react-redux"
function App() {
  const result = useSelector(state => state.Seletor)
  return (
    <div className={`${result['tc']} ${result['bg']} container`} >
      <div className="container">
        <div className="mt-5 ms-4" >
          <h3 >
            Lista de coisas à fazer
          </h3>
          <Seletor></Seletor>
          <ListaComponent></ListaComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
