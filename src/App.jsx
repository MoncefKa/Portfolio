import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {Welcome} from "./Pages/Dynamic/dynamicpath.js";
import { Navbar } from "./Components/Dynamic/DynamicComp.js";
function App() {
  return (
    <main className="w-full min-h-screen bg-black-500">
        <Router>
          <Navbar/>
          <Routes>
            <Route path={"/"} element={<Welcome/>}/>
          </Routes>
        </Router>
    </main>
  )
}

export default App
