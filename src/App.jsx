import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import ItemCount from "./componentes/ItemCount/ItemCount"

const App = () => {
  return (
    <div className="container-lg">
      <NavBar/>
      <ItemListContainer/>
      
    </div>
  )
}

export default App