import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className="container-lg">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/teclados" element={<h1> modificando </h1>}/>
          <Route path="/mouse" element={<h1> modificando </h1>}/>
          <Route path="/auriculares" element={<h1> modificando </h1>}/>
          <Route path="/monitores" element={<h1> modificando </h1>}/>
          <Route path="/gabinetes" element={<h1> modificando </h1>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App