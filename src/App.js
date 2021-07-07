import ListaComponent from './components/lista';
import Seletor from './components/seletor';
import { useSelector } from "react-redux"
import preval from 'preval.macro'
import LatestCommitComponent from './components/commit'
function App() {
  const result = useSelector(state => state.Seletor)

  return (
    <div className={`${result['tc']} ${result['bg']}`} style={{height:"100%", width:"100%"}} >
      <div >
        <div className="mt-5" >
          <h3>
            <i className="fa fa-list-alt" aria-hidden="true"></i> Lista de coisas à fazer
          </h3>
          <Seletor></Seletor>
          <ListaComponent></ListaComponent>
        </div>
        <p className="mt-5">
            Data de build: {preval`module.exports = new Date().toLocaleString();`} (GMT+0).
            
            <br/><a href="https://github.com/fortmea/a-fazer-redux" className="text-decoration-none" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          </p>
          <LatestCommitComponent></LatestCommitComponent>
      </div>
      
    </div>
  );
}

export default App;
