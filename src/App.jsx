import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'

const App = () => {
  return (
    <div className="container-lg">
      <NavBar/>
      <ItemListContainer greeting = {"Mensaje a través de Greeting :)"}/>
    </div>
  )
}

export default App