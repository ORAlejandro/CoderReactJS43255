import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import ItemCount from "./componentes/ItemCount/ItemCount"

const App = () => {
  return (
    <div className="container-lg">
      <NavBar/>
      <h2 className="primerTitulo">Productos Destacados</h2>
      <ItemListContainer greeting = {"Mensaje por props en ItemListContainer"}/>
      <ItemCount stock={15} inicial={1}/>
    </div>
  )
}

export default App